import React from "react";
import PropTypes from "prop-types";
import { apiConfig } from "../../../configs";
import Pagination from "./Pagination";
import UsersList from "./UsersList";
import ChooseNat from "./ChooseNat";
import styles from './ControlPanel.module.scss'

/**
 *
 * @param {*} props
 * @param {number} props.currentPage
 * @param {function} props.prevPage
 * @param {function} props.nextPage
 * @param {string} props.currentResults
 * @param {function} props.resultHandler
 * @param {string} props.currentNat
 * @param {function} props.natHandler
 *
 * @returns
 */
const ControlPanel = (props) => {
  return (
    <div className={styles.container}>
      <Pagination
        currentPage={props.currentPage}
        prevPage={props.prevPage}
        nextPage={props.nextPage}
      />
      <UsersList
        currentResults={props.currentResults}
        resultHandler={props.resultHandler}
      />
      <ChooseNat currentNat={props.currentNat} natHandler={props.natHandler} />
    </div>
  );
};

ControlPanel.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
  currentResults: PropTypes.string,
  resultHandler: PropTypes.func,
  currentNat: PropTypes.string,
  natHandler: PropTypes.func,
};

ControlPanel.defaultProps = {
  currentPage: 1,
  prevPage: () => {},
  nextPage: () => {},
  currentResults: String(apiConfig.DEFAULT_AMOUNT),
  resultHandler: () => {},
  currentNat: apiConfig.DEFAULT_NAT,
  natHandler: () => {},
};

export default ControlPanel;
