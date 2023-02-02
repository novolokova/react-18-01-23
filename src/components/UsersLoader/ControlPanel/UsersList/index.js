import React from "react";
import PropTypes from "prop-types";
import { apiConfig, resultsOptions } from "../../../../configs";

/**
 *
 * @param {*} props
 * @param {string} props.currentResults
 * @param {function} props.resultHandler
 * @returns
 */
function UsersList(props) {
  const { currentResults, resultHandler } = props;

  const mapOptions = ({ amount }) => (
    <label key={amount}>
      <input
        onChange={resultHandler}
        name="results"
        type="radio"
        value={amount}
        checked={currentResults === amount}
      />
      {amount}
    </label>
  );

  return <div>{resultsOptions.map(mapOptions)}</div>;
}

UsersList.propTypes = {
  currentResults: PropTypes.string,
  resultHandler: PropTypes.func,
};
UsersList.defaultProps = {
  currentResults: String(apiConfig.DEFAULT_AMOUNT),
  resultHandler: () => {},
};

export default UsersList;
