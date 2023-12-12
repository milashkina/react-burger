import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TLoginData, TPostLoginResponse} from "../../types/types";

export async function usePostLogin(data: TLoginData): Promise<TPostLoginResponse> {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes(res);
}


