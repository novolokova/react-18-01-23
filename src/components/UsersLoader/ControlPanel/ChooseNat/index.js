import React from "react";
import PropTypes from "prop-types";
import { apiConfig, natOptions } from "../../../../configs";

/**
 *
 * @param {*} props
 *  @param {string} props.currentNat
 *  @param {function} props.natHandler
 * @returns
 */
const ChooseNat = (props) => {
  const { currentNat, natHandler } = props;

  const mapOptions = ({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  );
  return (
    <select name="nat" onChange={natHandler} value={currentNat}>
      {natOptions.map(mapOptions)}
    </select>
  );
};

ChooseNat.propTypes = {
  currentNat: PropTypes.string,
  natHandler: PropTypes.func,
};
ChooseNat.defaultProps = {
  currentNat: apiConfig.DEFAULT_NAT,
  natHandler: () => {},
};

export default ChooseNat;
