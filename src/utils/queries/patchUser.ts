import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./fetchWithRefresh";
import {TFormValue, TPatchUser} from "../../types/types";

export const patchUser = (data: TFormValue): Promise<TPatchUser> => {
  return fetchWithRefresh<TPatchUser>(
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
