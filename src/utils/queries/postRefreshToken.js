import {ENDPOINT, NORMA_URL, TOKEN,} from "../constant";
import {fetchWithRefresh} from "./useFetchWithRefresh";

export const postRefreshToken = () => {
  return fetchWithRefresh(`${NORMA_URL}${ENDPOINT.REFRESH_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({token:  localStorage.getItem(TOKEN.REFRESH) }),
  })
}

