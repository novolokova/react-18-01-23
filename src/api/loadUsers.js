 const loadUsers = () =>
  fetch("/data/users.json").then((response) => response.json());

  export default loadUsers;