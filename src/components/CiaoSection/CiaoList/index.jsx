import React from "react";
import Ciao from "../Ciao";
import PropTypes from "prop-types";
/**
 *
 * @param {*} props
 * @param {object} props.users
 * @returns
 */
function CiaoList(props) {
  const mapUsers = ({ firstName, lastName, id }, index) => (
    <Ciao key={id} username={`${id}: ${firstName} ${lastName}`} />
  );
  const { users } = props;
  return <section>{users.map(mapUsers)}</section>;
}

CiaoList.defaultProps = {
  id: null,
  firstName: "noname",
  lastName: "noname",
};
CiaoList.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default CiaoList;
