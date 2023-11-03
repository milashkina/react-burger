import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./useFetchWithRefresh";


export const useGetUser = (data) => {
 return fetchWithRefresh (`${NORMA_URL}${ENDPOINT.USER}`,{
   method: 'GET',
   headers: {
     'Content-Type': 'application/json;charset=utf-8',
     authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
   },
   body: JSON.stringify(data),
 })
}
