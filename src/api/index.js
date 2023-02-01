/**
 *
 * @param {*} options
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.seed
 * @param {string} options.nat
 * @returns {Promise}
 */

import queryString from "query-string";
import { apiConfig } from "../configs";
//
export const getUsers = (options = {}) => {
  const defaultOptions = {
    format:apiConfig.DEFAULT_FORMAT,
    page: 1,
    results: apiConfig.DEFAULT_AMOUNT,
    seed: apiConfig.API_KEY,
    nat: apiConfig.DEFAULT_NAT,
    inc:apiConfig.DEFAULT_INC_FIELD,
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };

  
  return fetch(
    `${apiConfig.API_URL}/?${queryString.stringify(readyOptions)}`
  ).then((res) => res.json());
};



// отримує url, виконує запит по адресі, якщо fulfilled(data) то витягує данні та повертає через then проміс, якщо помилка то поверне проміс у стані reject(error)

