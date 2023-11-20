import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TForgotPasswordDataRequest} from "../../types/types";

export async function usePostForgotPassword(data: TForgotPasswordDataRequest) {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.FORGOT_PASSWORD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes(res);
}
