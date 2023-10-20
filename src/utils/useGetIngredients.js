import {API_INGREDIENTS} from "./constant";

export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
export async function useGetIngredients() {
  const res = await fetch(API_INGREDIENTS);
  return checkRes(res);
}

