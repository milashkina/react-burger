import {ENDPOINT, NORMA_URL} from "../constant";
import {checkRes} from "./checkResponse";
import {TGetIngredientsResponse} from "../../types/types";

export async function useGetIngredients() : Promise<TGetIngredientsResponse> {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.INGREDIENTS}`);
  return checkRes(res);
}

