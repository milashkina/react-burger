import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TFormValue, TPostRegisterResponse} from "../../types/types";

export async function usePostRegister(data: TFormValue): Promise<TPostRegisterResponse> {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.REGISTER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes<TPostRegisterResponse>(res);
}
