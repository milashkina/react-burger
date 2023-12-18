import {ENDPOINT} from "../constant";
import {requestApi} from "./requestApi";
import {TGetIngredientsResponse} from "../../types/types";

export async function getIngredients(): Promise<TGetIngredientsResponse>  {
  return await requestApi(`${ENDPOINT.INGREDIENTS}`)
}

