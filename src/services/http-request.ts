
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const BASE_URL: string = 'http://localhost:8080/api/';

export interface ServerResponse {
  success: boolean;
  records: any[];
  totalRecords: number;
  message?: string;
  data?: any;
  cached?: boolean;
}

const emptyResponse: any = {
  data: {
    data: { records: [] },
    success: false,
    totalRecords: 0,
    message: 'Network Error. Please try again',
    cached: true,
  },
};

export function doRequest(config: AxiosRequestConfig = {}): Promise<ServerResponse> {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  return axios
    .request(config)
    .then((response: AxiosResponse) => response.data || {})
    .catch((error: AxiosError) => (error.response || emptyResponse).data);
}

export const get = (
  url: string,
  params?: object,
  config?: AxiosRequestConfig
): Promise<ServerResponse> => doRequest({ params, url: BASE_URL + url, method: 'GET', ...config });

export const post = (
  url: string,
  data?: object,
  config?: AxiosRequestConfig
): Promise<ServerResponse> => doRequest({ data, url: BASE_URL + url, method: 'POST', ...config });