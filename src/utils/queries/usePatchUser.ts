import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./useFetchWithRefresh";
import {TPatchUser} from "../../types/types";

export const usePatchUser = (data: TPatchUser) => {
  return fetchWithRefresh(
    `${NORMA_URL}${ENDPOINT.USER}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
      },
      body: JSON.stringify(data),
    }
  )
}
