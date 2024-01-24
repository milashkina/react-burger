import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../constants/recover-password";
import {TFormValue} from "../../types/types";
import {TEntriesAction} from "../actions/entries";
import {TUserAction} from "../actions/user";
import {TRecoverPasswordAction} from "../actions/recover-password";
import {TLogoutAction} from "../actions/logout";
import {
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../constants/logout'
import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
} from "../constants/user";
import {
  LOGIN_FORM_SUBMIT, LOGIN_FORM_SUBMIT_FAILED, LOGIN_FORM_SUBMIT_SUCCESS,
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_SUCCESS
} from "../constants/entries";

type TAccessAction = TEntriesAction | TUserAction | TRecoverPasswordAction | TLogoutAction

type TState = {
  isAuth: boolean,

  user: TFormValue,
  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordSuccess: boolean,
  forgotPasswordFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordSuccess: boolean,
  resetPasswordFailed: boolean,

  editProfileRequest: boolean,
  editProfileFailed: boolean,

  getUserRequest: boolean,
  getUserFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,
}

export const initialState: TState = {
  isAuth: false,

  user: {
    name: '',
    email: '',
    password: '',
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

  logoutRequest: false,
  logoutFailed: false,
}

export const accessReducer = (state: TState = initialState, action: TAccessAction): TState => {
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
          name: action.data.user.name,
          email: action.data.user.email,
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
          name: action.data.user.name,
          email: action.data.user.email,
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
          name: action.user.user.name,
          email: action.user.user.email,
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
          name: action.user.user.name,
          email: action.user.user.email,
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
        user: {
          name: initialState.user.name,
          email: initialState.user.email,
          password: initialState.user.password
        }
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
