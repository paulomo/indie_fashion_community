import * as qs from "qs";

export const API_BASE_URL  = "https://getclothme.com/api/partners/";

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: API_BASE_URL,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        post: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        get: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        put: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        delete: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    paramsSerializer: function (params: any) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
      },
    timeoutErrorMessage: ``,
}
