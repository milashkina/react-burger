import {accessReducer, initialState} from '../../services/reducers/access'
import {
  LOGIN_FORM_SUBMIT, LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_SUCCESS, REGISTER_FORM_SUBMIT, REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_SUCCESS
} from "../../services/constants/entries";
import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../../services/constants/recover-password";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCESS, GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS
} from "../../services/constants/user";
import {LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../../services/constants/logout";
describe('check InitialState and all access reducers', () => {
  test('should return initialState', () => {
    const action = {}
    const received = accessReducer(undefined, action)
    expect(received).toEqual(initialState)
  })

  test('should return case REGISTER_FORM_SUBMIT',() => {
    const action = {
      type: REGISTER_FORM_SUBMIT
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    })
  })

  test('should return case REGISTER_FORM_SUBMIT_SUCCESS', () => {
    const data = {
      user: {
        name: 'Santa',
        email: 'santa@mail.ru',
        password: '123456789'
      }
    }
    const action = {
      type: REGISTER_FORM_SUBMIT_SUCCESS,
      data
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      registerRequest: false,
      user: {
        ...initialState.user,
        name: action.data.user.name,
        email: action.data.user.email,
      },
      isAuth: true
    })
  })

  test('should return case REGISTER_FORM_SUBMIT_FAILED',  () => {
    const action = {
      type: REGISTER_FORM_SUBMIT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    })
  })

  /* LOGIN TEST*/

  test('should return case LOGIN_FORM_SUBMIT',() => {
    const action = {
      type: LOGIN_FORM_SUBMIT
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    })
  })

  test('should return case LOGIN_FORM_SUBMIT_SUCCESS', () => {
    const data = {
      user: {
        email: 'milakina.ad@yandex.ru',
        password: '123456789'
      }
    }
    const action = {
      type: LOGIN_FORM_SUBMIT_SUCCESS,
      data
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      loginRequest: false,
      user: {
        ...initialState.user,
        name: action.data.user.name,
        email: action.data.user.email,
      },
      isAuth: true
    })
  })

  test('should return case LOGIN_FORM_SUBMIT_FAILED',  () => {
    const action = {
      type: LOGIN_FORM_SUBMIT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    })
  })

  /* FORGOT_PASSWORD TEST*/

  test('should return case FORGOT_PASSWORD_FORM_SUBMIT',() => {
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
      forgotPasswordSuccess: false,
    })
  })

  test('should return case FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS', () => {
    const data = {
      user: {
        email: 'milakina.ad@yandex.ru',
      }
    }
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
      data
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordSuccess: true,
    })
  })

  test('should return case FORGOT_PASSWORD_FORM_SUBMIT_FAILED',  () => {
    const action = {
      type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    })
  })

  /* RESET_PASSWORD TEST*/

  test('should return case RESET_PASSWORD_FORM_SUBMIT',() => {
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false,
      resetPasswordSuccess: false,
    })
  })

  test('should return case RESET_PASSWORD_FORM_SUBMIT_SUCCESS', () => {
    const data = {
      user: {
        password: 'milakina.ad@yandex.ru',
        token: '633a6941-1da7-4c3b-9687-277e92a3d5bd'
      }
    }
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
      data
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordSuccess: true,
    })
  })

  test('should return case RESET_PASSWORD_FORM_SUBMIT_FAILED',  () => {
    const action = {
      type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    })
  })

  /* EDIT_PROFILE TEST*/

  test('should return case EDIT_PROFILE_FORM_SUBMIT',() => {
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      editProfileRequest: true,
      editProfileFailed: false,
    })
  })

  test('should return case EDIT_PROFILE_FORM_SUBMIT_SUCCESS', () => {
    const user = {
      user: {
        name: 'SANTA',
        email: 'milakina.ad@yandex.ru',
      }
    }
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
      user
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      editProfileRequest: false,
      user: {
        ...initialState.user,
        name: action.user.user.name,
        email: action.user.user.email,
      },
    })
  })

  test('should return case EDIT_PROFILE_FORM_SUBMIT_FAILED',  () => {
    const action = {
      type: EDIT_PROFILE_FORM_SUBMIT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      editProfileRequest: false,
      editProfileFailed: true,
    })
  })

  /* FORGOT_PASSWORD TEST*/

  test('should return case GET_USER_REQUEST',() => {
    const action = {
      type: GET_USER_REQUEST
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      getUserRequest: true,
      getUserFailed: false,
    })
  })

  test('should return case GET_USER_SUCCESS', () => {
    const user = {
      user: {
        name: 'santa',
        email: 'milakina.ad@yandex.ru',
      }
    }
    const action = {
      type: GET_USER_SUCCESS,
      user
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      getUserRequest: false,
      isAuth: true,
      user: {
        ...initialState.user,
        name: action.user.user.name,
        email: action.user.user.email,
      },
    })
  })

  test('should return case GET_USER_FAILED',  () => {
    const action = {
      type: GET_USER_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      getUserRequest: false,
      getUserFailed: true,
      isAuth: false,
    })
  })

  /* LOGOUT TEST*/

  test('should return case LOGOUT_REQUEST',() => {
    const action = {
      type: LOGOUT_REQUEST
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      isAuth: false,
      logoutRequest: true,
      logoutFailed: false,
    })
  })

  test('should return case LOGOUT_SUCCESS', () => {
    const action = {
      type: LOGOUT_SUCCESS,
    }
    const received = accessReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      logoutRequest: false,
      user: {
        name: initialState.user.name,
        email: initialState.user.email,
        password: initialState.user.password,
      },
    })
  })

  test('should return case LOGOUT_FAILED',  () => {
    const action = {
      type: LOGOUT_FAILED,
    }
    const received = accessReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    })
  })
})
