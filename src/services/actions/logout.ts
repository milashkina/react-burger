import {LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../constants/logout";
import {postLogout} from "../../utils/queries/postLogout";
import {deleteCookie} from "../../utils/cookies";
import {TOKEN} from "../../utils/constant";
import {AppDispatch, AppThunkAction} from "../../types";

export interface ILogoutRequest {
    readonly type: typeof LOGOUT_REQUEST
}
export interface  ILogoutSuccess {
    readonly type: typeof LOGOUT_SUCCESS,
}
export interface  ILogoutFailed {
    readonly type: typeof LOGOUT_FAILED
}

//union type
export type TLogoutAction = ILogoutFailed | ILogoutSuccess |
    ILogoutRequest

// generation action
export const logoutRequest = (): ILogoutRequest => ({
    type: LOGOUT_REQUEST
})

export const logoutSuccess = (): ILogoutSuccess => ({
    type: LOGOUT_SUCCESS
})
export const logoutFailed = (): ILogoutFailed => ({
    type: LOGOUT_FAILED
})

export const postLogoutThunk = (): AppThunkAction => (dispatch: AppDispatch) => {
    dispatch(logoutRequest())
    postLogout().then(() => {
                dispatch(logoutSuccess())
                deleteCookie(TOKEN.ACCESS)
                localStorage.removeItem(TOKEN.REFRESH)
            }
        )
        .catch(() => {
            dispatch(logoutFailed())
        })
}
