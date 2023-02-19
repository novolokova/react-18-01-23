export const loadPhones = () =>
  fetch("/data/phones.json").then((response) => response.json())

  export default loadPhones;