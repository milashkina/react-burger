import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TFormValue} from "../../types/types";

export async function usePostRegister(data: TFormValue) {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.REGISTER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes(res);
}
