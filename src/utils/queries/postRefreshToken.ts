import {ENDPOINT, NORMA_URL, TOKEN,} from "../constant";
import {fetchWithRefresh} from "./fetchWithRefresh";
import {TRefreshResponse} from "../../types/types";

export const postRefreshToken = (): Promise<TRefreshResponse> => {
  return fetchWithRefresh<TRefreshResponse>(`${NORMA_URL}${ENDPOINT.REFRESH_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({token:  localStorage.getItem(TOKEN.REFRESH) }),
  })
}

