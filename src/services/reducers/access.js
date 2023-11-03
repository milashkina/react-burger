import {string} from "prop-types";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_RESET,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS, LOGIN_FORM_SUBMIT, LOGIN_FORM_SUBMIT_FAILED, LOGIN_FORM_SUBMIT_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS, REGISTER_FORM_SUBMIT, REGISTER_FORM_SUBMIT_FAILED, REGISTER_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../actions/access";
import {usePostRegister} from "../../utils/queries/usePostRegister";
import {deleteCookie, setCookie} from "../../utils/cookies";
import {ERROR, TOKEN} from "../../utils/constant";
import {usePostLogin} from "../../utils/queries/usePostLogin";
import {useGetUser} from "../../utils/queries/useGetUser";
import {usePostRefreshToken} from "../../utils/queries/usePostRefreshToken";
import {usePostForgotPassword} from "../../utils/queries/usePostForgotPassword";
import {usePostResetPassword} from "../../utils/queries/usePostResetPassword";
import {usePostLogout} from "../../utils/queries/usePostLogout";
import {usePatchUser} from "../../utils/queries/usePatchUser";


const initialState = {
  isAuth: false,

  user: {
    name: string,
    email: string,
    password: string,
  },

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,

  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false,

  editProfileRequest: false,
  editProfileFailed: false,

  getUserRequest: false,
  getUserFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,

  logoutRequest: false,
  logoutFailed: false,
}

export function postLogout(){
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    })
    usePostLogout()
      .then(() => {
          dispatch({
            type: LOGOUT_SUCCESS
          })
          deleteCookie(TOKEN.ACCESS)
          localStorage.removeItem(TOKEN.REFRESH)
        }
      )
      .catch(() => {
        dispatch({
          type: LOGOUT_FAILED
        })
      })
  }
}
export function postForgotPassword(data){
  return function (dispatch){
    dispatch({
      type: FORGOT_PASSWORD_FORM_SUBMIT
    })
    usePostForgotPassword(data)
      .then(
        dispatch({
          type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS
        })
      )
      .catch(() => {
        dispatch({
          type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED
        })
      })
  }
}

export function postResetPassword(data){
  return function(dispatch){
    dispatch({
      type: RESET_PASSWORD_FORM_SUBMIT
    })
    usePostResetPassword(data)
      .then(() => dispatch({
        type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS
      }))
      .catch(() => {
        dispatch({
          type: RESET_PASSWORD_FORM_SUBMIT_FAILED
        })
      })
  }
}
export function postRegister(data) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_FORM_SUBMIT
    })
    usePostRegister(data)
      .then((data) => {
        dispatch({
          type: REGISTER_FORM_SUBMIT_SUCCESS,
          user: data.user,
        })
        setCookie(TOKEN.ACCESS, data.accessToken.split('Bearer ')[1])
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken)
      })
      .catch(() => {
        dispatch({
          type: REGISTER_FORM_SUBMIT_FAILED
        })
      })
  }
}

export function postLogin(data) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_FORM_SUBMIT
    })
    usePostLogin(data)
      .then((data) => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_SUCCESS,
          user: data.user,
        })
        setCookie(TOKEN.ACCESS, data.accessToken.split('Bearer ')[1])
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken)
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FORM_SUBMIT_FAILED
        })
      })
  }
}

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })
    useGetUser()
      .then( (data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data.user
        })
      })
      .catch(() => {
          dispatch({
            type: GET_USER_FAILED
          })
      })
  }
}

export function refreshToken(data) {
  return function (dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST
    })
    usePostRefreshToken(data)
      .then( (data) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS
        })
        deleteCookie(TOKEN.ACCESS)
        localStorage.removeItem(TOKEN.REFRESH)

        setCookie(TOKEN.ACCESS, data.accessToken.split('Bearer ')[1])
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken)
      })
      .catch(() => {
        dispatch({
          type: REFRESH_TOKEN_FAILED
        })
      })
  }
}

export function patchUser(data) {
  return function(dispatch) {
    dispatch({
      type: EDIT_PROFILE_FORM_SUBMIT
    })
    usePatchUser(data)
      .then(() => {
        dispatch({
          type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
          user: data
        })
      })
      .catch(() => {
        dispatch({
          type: EDIT_PROFILE_FORM_SUBMIT_FAILED
        })
      })
  }
}
export const accessReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      }
    }
    case REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuth: true,
      }
    }
    case REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      }
    }
    case LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      }
    }
    case LOGIN_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuth: true,
      }
    }
    case LOGIN_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      }
    }
    case FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
        forgotPasswordSuccess: false,
      }
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true,
      }
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      }
    }
    case RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
        resetPasswordSuccess: false,
      }
    }
    case RESET_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
      }
    }
    case RESET_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      }
    }
    case FORGOT_PASSWORD_RESET: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
        resetPasswordSuccess: false,
      }
    }
    case EDIT_PROFILE_FORM_SUBMIT: {
      return {
        ...state,
        editProfileRequest: true,
        editProfileFailed: false,
      }
    }
    case EDIT_PROFILE_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        editProfileRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
          password: action.user.password
        }
      }
    }
    case EDIT_PROFILE_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        editProfileRequest: false,
        editProfileFailed: true,
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        isAuth: true,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        }
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
        isAuth: false,
      }
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenFailed: false,
        getUserFailed: false,
        editProfileFailed: false,
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        isAuth: true
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: true,
        isAuth: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isAuth: false,
        logoutRequest: true,
        logoutFailed: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      }
    }
    default: {
      return state;
    }
  }
}
