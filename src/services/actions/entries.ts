import {
    LOGIN_FORM_SUBMIT,
    LOGIN_FORM_SUBMIT_FAILED,
    LOGIN_FORM_SUBMIT_SUCCESS,
    REGISTER_FORM_SUBMIT,
    REGISTER_FORM_SUBMIT_FAILED,
    REGISTER_FORM_SUBMIT_SUCCESS
} from "../constants/entries";
import {TFormValue, TLoginData, TPostLoginResponse, TPostRegisterResponse, TUser} from "../../types/types";
import {usePostLogin} from "../../utils/queries/usePostLogin";
import {setCookie} from "../../utils/cookies";
import {TOKEN} from "../../utils/constant";
import {AppDispatch, AppThunkAction} from "../../types";
import {usePostRegister} from "../../utils/queries/usePostRegister";

export interface ILoginFormSubmit {
    readonly type: typeof LOGIN_FORM_SUBMIT,
    readonly data: TLoginData
}
export interface  ILoginFormSubmitSuccess {
    readonly type: typeof LOGIN_FORM_SUBMIT_SUCCESS,
    readonly user: TPostLoginResponse
}
export interface  ILoginFormSubmitFailed {
    readonly type: typeof LOGIN_FORM_SUBMIT_FAILED
}
export interface IRegisterFormSubmit {
    readonly type: typeof REGISTER_FORM_SUBMIT
}
export interface  IRegisterFormSubmitSuccess {
    readonly type: typeof REGISTER_FORM_SUBMIT_SUCCESS,
    readonly data: TFormValue
}
export interface  IRegisterFormSubmitFailed {
    readonly type: typeof REGISTER_FORM_SUBMIT_FAILED
}

//union-type
export type TEntriesAction = ILoginFormSubmitFailed | ILoginFormSubmitSuccess | ILoginFormSubmit | IRegisterFormSubmitFailed |
    IRegisterFormSubmitSuccess | IRegisterFormSubmit

// generator action
export const loginRequest = (data: TLoginData): ILoginFormSubmit => ({
    type: LOGIN_FORM_SUBMIT,
    data
})

export const loginRequestSuccess = (user: TPostLoginResponse): ILoginFormSubmitSuccess => ({
    type: LOGIN_FORM_SUBMIT_SUCCESS,
    user
})
export const loginRequestFailed = (): ILoginFormSubmitFailed => ({
    type: LOGIN_FORM_SUBMIT_FAILED
})

export const registerFormSubmit = (): IRegisterFormSubmit => ({
    type: REGISTER_FORM_SUBMIT
})
export const registerFormSubmitSuccess = (data: TFormValue): IRegisterFormSubmitSuccess => ({
    type: REGISTER_FORM_SUBMIT_SUCCESS,
    data
})
export const registerFormSubmitFailed = (): IRegisterFormSubmitFailed => ({
    type: REGISTER_FORM_SUBMIT_FAILED
})
export const postLoginThunk = (data: TLoginData): AppThunkAction<Promise<unknown>> => async (dispatch) => {
    dispatch(loginRequest(data))
    try {
        const data_1: TPostLoginResponse = await usePostLogin(data);
        dispatch(loginRequestSuccess(data_1));
        setCookie(TOKEN.ACCESS, data_1.accessToken.split('Bearer ')[1]);
        localStorage.setItem(TOKEN.REFRESH, data_1.refreshToken);
    } catch {
        dispatch(loginRequestFailed());
    }
}
export const postRegisterThunk = (data: TFormValue): AppThunkAction<Promise<unknown>> => async (dispatch) => {
    dispatch(registerFormSubmit())
    try {
        const data_1 = await usePostRegister(data);
        dispatch(registerFormSubmitSuccess(data_1));
        setCookie(TOKEN.ACCESS, data_1.accessToken.split('Bearer ')[1]);
        localStorage.setItem(TOKEN.REFRESH, data_1.refreshToken);
    } catch {
        dispatch(registerFormSubmitFailed());
    }
}
