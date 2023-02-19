import queryString from "query-string";
import { apiConfig } from "../configs";

/**
 *
 * @param {*} options
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.seed
 * @param {string} options.nat
 * @returns {Promise}
 */
 const getUsers = (options = {}) => {
  const defaultOptions = {
    format: apiConfig.DEFAULT_FORMAT,
    page: 1,
    results: apiConfig.DEFAULT_AMOUNT,
    seed: apiConfig.API_KEY,
    nat: apiConfig.DEFAULT_NAT,
    inc: apiConfig.DEFAULT_INC_FIELD,
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };
  return fetch(
    `${apiConfig.API_URL}/?${queryString.stringify(readyOptions)}`
  ).then((res) => res.json());
};
// отримує url(він у configs), виконує запит по адресі, та повертає через then проміс до нащої ф-ції  load

//https://www.npmjs.com/package/query-string
//queryString.stringify(***) -бібліотека

export default getUsers;