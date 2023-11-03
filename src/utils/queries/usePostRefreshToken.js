import {ENDPOINT, NORMA_URL,} from "../constant";
import {fetchWithRefresh} from "./useFetchWithRefresh";

export const usePostRefreshToken = (data) => {
  return fetchWithRefresh(`${NORMA_URL}${ENDPOINT.REFRESH_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
}

