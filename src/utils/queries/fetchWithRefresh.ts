import {deleteCookie, setCookie} from "../cookies";
import {ERROR, TOKEN} from "../constant";
import {postRefreshToken} from "./postRefreshToken";
import {checkRes} from "./checkResponse";

export const fetchWithRefresh = async<T> (
    url: RequestInfo,
    options: RequestInit
): Promise<T> => {
  try {
    const res = await fetch(url, options);
    return await checkRes<T>(res);
  } catch (err) {
    if ((err as {message: string }).message === ERROR.JWT_EXPIRED) {
      const refreshData: ({ success: boolean } & { refreshToken: string; accessToken: string }) = await postRefreshToken();
      if (!refreshData.success) {
        await Promise.reject(refreshData);
      }
      deleteCookie(TOKEN.ACCESS)
      localStorage.removeItem(TOKEN.REFRESH)

      setCookie(TOKEN.ACCESS, refreshData.accessToken.split('Bearer ')[1])
      localStorage.setItem(TOKEN.REFRESH, refreshData.refreshToken)
      if (options.headers){
        (options.headers as {[key: string]: string}).authorization =
            refreshData.accessToken
      }
      const res = await fetch(url, options);
      return await checkRes<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};
