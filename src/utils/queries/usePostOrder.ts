import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./useFetchWithRefresh";
import {TOrderDataRequest} from "../../types/types";
export const usePostOrder = (data: TOrderDataRequest) => {
  return fetchWithRefresh(`${NORMA_URL}${ENDPOINT.ORDERS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
    },
    body: JSON.stringify(data),
  })
}
