import axios, { AxiosRequestConfig } from 'axios';
import { UAT, PRODUCTION } from 'constants/environment';

/**
 * Returns api url based on the current environment
 * @return corresponding api url
 */
const getApiUrl = () => {
  const environment = process.env.NODE_ENV || 'development';
  
  switch (environment) {
    case PRODUCTION:
      return process.env.REACT_APP_PRODUCTION_API_URL;
    case UAT:
      return process.env.REACT_APP_UAT_API_URL;
    default:
      return process.env.REACT_APP_DEVELOPMENT_API_URL;
  }
};

const baseURL = `${getApiUrl()}/api/`;
const timeout = 30000;

/**
 * Requests a path, returning a promise.
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(options: AxiosRequestConfig) {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
  });

  return axiosInstance(options);
}
