import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./useFetchWithRefresh";
export const usePostOrder = (data) => {
  return fetchWithRefresh(`${NORMA_URL}${ENDPOINT.ORDERS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
    },
    body: JSON.stringify(data),
  })
}
