import {ENDPOINT, NORMA_URL} from "../constant";

export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export async function usePostResetPassword(data) {
  const res = await fetch(`${NORMA_URL}${ENDPOINT.RESET_PASSWORD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  return checkRes(res);
}
