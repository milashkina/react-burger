import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {fetchWithRefresh} from "./useFetchWithRefresh";
import {TUserResponse} from "../../types/types";


export const useGetUser = (): Promise<TUserResponse> => {
 return fetchWithRefresh<TUserResponse> (`${NORMA_URL}${ENDPOINT.USER}`,{
   method: 'GET',
   headers: {
     'Content-Type': 'application/json;charset=utf-8',
     authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
   },
 })
}
