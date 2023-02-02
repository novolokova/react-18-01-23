import React from "react";
import PropTypes from "prop-types";
import styles from "./Users.module.scss";

/**
 *
 * @param {*} props
 * @param {array} props.users
 * @returns
 */
function Users(props) {
  const { users } = props;

  const mapUsers = ({ gender, name, nat, login, location, picture }) => (
    <article key={login.uuid} className={styles.container}>
      <h3>
        {name.first} {name.last}
      </h3>
      <img src={picture.thumbnail} alt="user" />
      <p>nat: {nat} </p>
      <p>gender: {gender}</p>
      <p>city: {location.city}</p>
    </article>
  );
  return <>{users.map(mapUsers)}</>;
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
