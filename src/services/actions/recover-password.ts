import {
    FORGOT_PASSWORD_FORM_SUBMIT,
    FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
    FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    RESET_PASSWORD_FORM_SUBMIT,
    RESET_PASSWORD_FORM_SUBMIT_FAILED,
    RESET_PASSWORD_FORM_SUBMIT_SUCCESS
} from "../constants/recover-password";
import {postForgotPassword} from "../../utils/queries/postForgotPassword";
import {postResetPassword} from "../../utils/queries/postResetPassword";
import {TForgotPasswordData, TResetPasswordDataRequest} from "../../types/types";
import {AppThunkAction} from "../../types";

export interface IForgotPasswordFormSubmit {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT
}
export interface  IForgotPasswordFormSubmitSuccess {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    readonly data: TForgotPasswordData
}
export interface  IForgotPasswordFormSubmitFailed {
    readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED
}
export interface IResetPasswordFormSubmit {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT
}
export interface  IResetPasswordFormSubmitSuccess {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
    readonly data: TResetPasswordDataRequest
}
export interface  IResetPasswordFormSubmitFailed {
    readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED
}

export type TRecoverPasswordAction = IResetPasswordFormSubmitFailed |
    IResetPasswordFormSubmitSuccess | IResetPasswordFormSubmit |
    IForgotPasswordFormSubmitFailed | IForgotPasswordFormSubmitSuccess |
    IForgotPasswordFormSubmit

// generator action
export const forgotPasswordFormSubmit = ():IForgotPasswordFormSubmit => ({
    type: FORGOT_PASSWORD_FORM_SUBMIT,
})
export const forgotPasswordFormSubmitSuccess = (data: TForgotPasswordData): IForgotPasswordFormSubmitSuccess => ({
    type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    data
})
export const forgotPasswordFormSubmitFailed = (): IForgotPasswordFormSubmitFailed => ({
    type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED
})
export const resetPasswordFormSubmit = (): IResetPasswordFormSubmit => ({
    type: RESET_PASSWORD_FORM_SUBMIT
})
export const resetPasswordFormSubmitSuccess = (data: TResetPasswordDataRequest): IResetPasswordFormSubmitSuccess => ({
    type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
    data
})
export const resetPasswordFormSubmitFailed = (): IResetPasswordFormSubmitFailed => ({
    type: RESET_PASSWORD_FORM_SUBMIT_FAILED
})


export const postForgotPasswordThunk = (data: TForgotPasswordData): AppThunkAction<Promise<unknown>> => (dispatch) => {
    dispatch(forgotPasswordFormSubmit())
    return postForgotPassword(data).then(
        () => dispatch(forgotPasswordFormSubmitSuccess(data))
        )
        .catch(() => {
            dispatch(forgotPasswordFormSubmitFailed())
        })
}

export const postResetPasswordThunk = (data: TResetPasswordDataRequest): AppThunkAction<Promise<unknown>> => (dispatch) => {
    dispatch(resetPasswordFormSubmit())
    return postResetPassword(data).then(
        () => dispatch(resetPasswordFormSubmitSuccess(data)))
        .catch(() => {
            dispatch(resetPasswordFormSubmitFailed)
        })
}
