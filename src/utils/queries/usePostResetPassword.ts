import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TResetPasswordDataRequest, TResetPasswordResponse} from "../../types/types";

export async function usePostResetPassword(data: TResetPasswordDataRequest): Promise<TResetPasswordResponse> {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.RESET_PASSWORD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes(res);
}
