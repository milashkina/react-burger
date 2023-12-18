import {ENDPOINT} from "../constant";
import {TLoginData, TPostLoginResponse} from "../../types/types";
import {requestApi} from "./requestApi";

export async function postLogin(data: TLoginData): Promise<TPostLoginResponse> {
  return await requestApi(`${ENDPOINT.LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}


