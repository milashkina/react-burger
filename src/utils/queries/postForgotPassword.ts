import {ENDPOINT} from "../constant";
import {TForgotPasswordData, TForgotPasswordDataRequest} from "../../types/types";
import {requestApi} from "./requestApi";

export async function postForgotPassword(data: TForgotPasswordData ): Promise<TForgotPasswordDataRequest> {
  return await requestApi(`${ENDPOINT.FORGOT_PASSWORD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}
