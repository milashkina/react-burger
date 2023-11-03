import {setCookie} from "../cookies";
import {refreshToken} from "../../services/reducers/access";
import {ERROR, TOKEN} from "../constant";

export const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkRes(res);
  } catch (err) {
    if (err.message === ERROR.JWT_EXPIRED) {
      const refreshData = refreshToken();
      if (!refreshData.success) {
        await Promise.reject(refreshData);
      }
     // localStorage.setItem(TOKEN.REFRESH, refreshData.refreshToken);
     // setCookie(TOKEN.ACCESS, refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};
