import {deleteCookie, setCookie} from "../cookies";
import {ERROR, TOKEN} from "../constant";
import {postRefreshToken} from "./postRefreshToken";

export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkRes(res);
  } catch (err) {
    if (err.message === ERROR.JWT_EXPIRED) {
      const refreshData = postRefreshToken();
      if (!refreshData.success) {
        await Promise.reject(refreshData);
      }
      deleteCookie(TOKEN.ACCESS)
      localStorage.removeItem(TOKEN.REFRESH)

      setCookie(TOKEN.ACCESS, refreshData.accessToken.split('Bearer ')[1])
      localStorage.setItem(TOKEN.REFRESH, refreshData.refreshToken)
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};
