import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

/**
 * Makes an asynchronous HTTP request using the axios library
 * @async
 * @function makeRequest
 * @param {Object} options - request parameters
 * @param {string} [options.method='GET'] - HTTP request method: "GET" | "POST" | "PATCH" | "PUT"
 * @param {string} options.url - Request URL
 * @param {Object} [options.params={}] - request parameters (query string).
 * @param {Object} [options.data={}] - Data to be sent in the body of the request.
 * @param {string} [options.responseType='json'] - Expected response type from the server (default 'json')
 * @param {Object} [options.headers={'Content-Type': 'application/json'}] - request headers
 * @returns {Promise<any>} A promise that is resolved by server response data
 */
export const makeRequest = async ({
  method = 'GET',
  url,
  params = {},
  data = {},
  responseType = 'json',
  headers = { 'Content-Type': 'application/json' },
}) => {
  const response = await axios({
    baseURL: axios.defaults.baseURL,
    method,
    url,
    params,
    data,
    responseType,
    headers,
  });

  return response.data;
};
