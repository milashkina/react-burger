import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {fetchWithRefresh} from "./useFetchWithRefresh";
import {TLogoutResponse} from "../../types/types";

export const usePostLogout = (): Promise<TLogoutResponse> => {
  return fetchWithRefresh<TLogoutResponse>(`${NORMA_URL}${ENDPOINT.LOGOUT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token : `${localStorage.getItem(TOKEN.REFRESH)}`}),
  })
}
