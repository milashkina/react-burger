import {ENDPOINT} from "../constant";
import {TFormValue, TPostRegisterResponse} from "../../types/types";
import {requestApi} from "./requestApi";

export async function postRegister(data: TFormValue): Promise<TPostRegisterResponse> {
  return await requestApi(`${ENDPOINT.REGISTER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}
