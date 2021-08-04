import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

const BaseUrl: any = "http://localhost:9090/api/"
export interface ServerResponse {
  success: boolean
  records: any[]
  totalRecords: number
  message?: string
  data?: any
  cached?: boolean
}

const emptyResponse: any = {
  data: {
    data: { records: [] },
    success: false,
    totalRecords: 0,
    message: "Network Error. Please try again",
    cached: true,
  },
}

export function doRequest(config: AxiosRequestConfig = {}): Promise<ServerResponse> {
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
  axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  return axios
    .request(config)
    .then((response: AxiosResponse) => response.data || {})
    .catch((error: AxiosError) => (error.response || emptyResponse).data)
}

export const get = (
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<ServerResponse> =>
  doRequest({ params, url: BaseUrl + url, method: "GET", ...config })

export const post = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ServerResponse> =>
  doRequest({ data, url: BaseUrl + url, method: "POST", ...config })


export const formDataPost = (url: string, data?: any) => {
  const headers = {
    headers: {
      Accept: "application/json",
      'Content-Type': `multipart/form-data`,
      Authorization: localStorage.getItem("token"),
    },
  };
  const apiUrl: string = BaseUrl + url
  return axios.post(apiUrl, data, headers)
    .then((response: AxiosResponse) => response.data || {})
    .catch((error: AxiosError) => (error.response || emptyResponse).data)
}