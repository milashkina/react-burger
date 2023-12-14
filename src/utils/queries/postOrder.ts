import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./fetchWithRefresh";
import {TOrderData, TOrderDataSuccessRequest} from "../../types/types";
export const usePostOrder = (data: TOrderData): Promise<TOrderDataSuccessRequest> => {
  return fetchWithRefresh<TOrderDataSuccessRequest>(`${NORMA_URL}${ENDPOINT.ORDERS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
    },
    body: JSON.stringify(data),
  })
}
