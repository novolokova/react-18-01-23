import React from "react";
import PropTypes from "prop-types";
import { natOptions } from "../../../configs";

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
  currentNat: PropTypes.string.isRequired,
  natHandler: PropTypes.func.isRequired,
};
//default

export default ChooseNat;
