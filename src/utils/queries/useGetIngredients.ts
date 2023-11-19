import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";

export async function useGetIngredients() {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.INGREDIENTS}`);
  return checkRes(res);
}

