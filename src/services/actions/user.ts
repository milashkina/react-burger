import {
    EDIT_PROFILE_FORM_SUBMIT,
    EDIT_PROFILE_FORM_SUBMIT_FAILED,
    EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
    GET_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
} from "../constants/user";
import {TFormValue, TPatchUser, TUserResponse} from "../../types/types";
import {getUser} from "../../utils/queries/getUser";
import {patchUser} from "../../utils/queries/patchUser";
import {AppThunkAction} from "../../types";

export interface IEditProfileFormSubmit {
    readonly type: typeof EDIT_PROFILE_FORM_SUBMIT
}
export interface  IEditProfileFormSubmitSuccess {
    readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
    readonly user: TPatchUser
}
export interface  IEditProfileFormSubmitFailed {
    readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_FAILED
}
export interface IGetUserRequest {
    readonly type: typeof GET_USER_REQUEST
}
export interface  IGetUserRequestSuccess {
    readonly type: typeof GET_USER_SUCCESS,
    readonly user: TUserResponse
}
export interface  IGetUserRequestFailed {
    readonly type: typeof GET_USER_FAILED
}

// Объединяем в Union
export type TUserAction =
    IGetUserRequestFailed |
    IGetUserRequestSuccess | IGetUserRequest |
    IEditProfileFormSubmitFailed | IEditProfileFormSubmitSuccess |
    IEditProfileFormSubmit


// generator action

export const editProfileFormSubmit = (): IEditProfileFormSubmit => ({
    type: EDIT_PROFILE_FORM_SUBMIT
})
export const editProfileFormSubmitSuccess = (user: TPatchUser): IEditProfileFormSubmitSuccess => ({
    type: EDIT_PROFILE_FORM_SUBMIT_SUCCESS,
    user,
})

export const editProfileFormSubmitFailed = (): IEditProfileFormSubmitFailed => ({
    type: EDIT_PROFILE_FORM_SUBMIT_FAILED
})
export const getUserRequest = (): IGetUserRequest => ({
    type: GET_USER_REQUEST
})
export const getUserRequestSuccess = (user: TUserResponse): IGetUserRequestSuccess => ({
    type: GET_USER_SUCCESS,
    user,
})
export const getUserRequestFailed = (): IGetUserRequestFailed => ({
    type: GET_USER_FAILED
})

export const getUserThunk = ():AppThunkAction => (dispatch) => {
    dispatch(getUserRequest())
    getUser().then( (data: TUserResponse) => {
        dispatch(getUserRequestSuccess(data))
    })
    .catch(() => {
        dispatch(getUserRequestFailed())
    })
}


export const patchUserThunk = (data: TFormValue): AppThunkAction<Promise<unknown>> => async (dispatch) => {
    dispatch(editProfileFormSubmit())
    try {
        const res = await patchUser(data);
        if (res && res.success) {
            dispatch(editProfileFormSubmitSuccess(res));
        }
    } catch {
        dispatch(editProfileFormSubmitFailed());
    }

}
