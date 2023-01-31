/**
 *
 * @param {*} options
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.seed
 * @param {string} options.nat
 * @returns {Promise}
 */
//
export const getUsers = (options = {}) => {
  const defaultOptions = {
    format: 'json',
    page: 1,
    results: 5,
    seed: "fm2022-2",
    nat: "gb",
    inc:'gender,name,nat,login'
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };

  const { page, results, seed, nat, format, inc } = readyOptions;
  return fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}&nat=${nat}`
  ).then((res) => res.json());
};

// отримує url, виконує запит по адресі, якщо fulfilled(data) то витягує данні та повертає через then проміс, якщо помилка то поверне проміс у стані reject(error)
