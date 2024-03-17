/**
 * Gets the values of request parameters from the URL of the browser line using the given keys
 * @function
 * @param {string[]} keys - An array of keys for which you want to get values from the request parameters
 * @returns {string[]} An array of request parameter values corresponding to the passed keys
 */
export const getSearches = (keys) =>
  keys.map((key) => new URLSearchParams(window.location.search).get(key));
