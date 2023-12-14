import {ENDPOINT} from "../constant";
import {TResetPasswordDataRequest, TResetPasswordResponse} from "../../types/types";
import {requestApi} from "./requestApi";

export async function postResetPassword(data: TResetPasswordDataRequest): Promise<TResetPasswordResponse> {
  return await requestApi(`${ENDPOINT.RESET_PASSWORD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}
