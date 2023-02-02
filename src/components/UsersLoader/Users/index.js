import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @param {array} props.users
 * @returns
 */
function Users(props) {
  const { users } = props;
  
  const mapUsers = ({ gender, name, nat, login, location, picture }) => (
    <article key={login.uuid}>
      <h3>
        {name.first} {name.last}
      </h3>
      <img src={picture.thumbnail} alt="user" />
      <p>nat: {nat} </p>
      <p>gender: {gender}</p>
      <p>city: {location.city}</p>
    </article>
  );
  return (
    <div>
      <h2>Users: </h2>
      {users.map(mapUsers)}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
