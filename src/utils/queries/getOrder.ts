import {ENDPOINT, NORMA_URL, TOKEN} from "../constant";
import {getCookie} from "../cookies";
import {TGetOrderResponse} from "../../types/types";
import {fetchWithRefresh} from "./fetchWithRefresh";


export const getOrder = (id: string): Promise<TGetOrderResponse> => {
    return fetchWithRefresh<TGetOrderResponse> (`${NORMA_URL}${ENDPOINT.ORDERS}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: 'Bearer ' + getCookie(TOKEN.ACCESS)
        }
    })
}
