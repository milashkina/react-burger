import {checkRes} from "./checkResponse";

import {NORMA_URL} from "../constant";


export const requestApi = async <T>(endpoint: Request | string, options?: object): Promise<T> => {
    const url = NORMA_URL + endpoint;
    const res = await fetch(url, options);
    return checkRes(res);
}
