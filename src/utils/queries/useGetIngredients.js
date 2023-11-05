import {ENDPOINT, NORMA_URL} from "../constant";

export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
export async function useGetIngredients() {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.INGREDIENTS}`);
  return checkRes(res);
}

