import React from "react";
import PropTypes from "prop-types";
import { DOTTS_NEXT, DOTTS_PREV } from "../../../../constants";

/**
 *
 * @param {*} props
 * @param {number} props.currentPage
 * @param {function} props.prevPage
 * @param {function} props.nextPage
 *
 * @returns
 */
const Pagination = (props) => {
  const { currentPage, prevPage, nextPage } = props;
  return (
    <div>
      <button onClick={prevPage}>&#9664;</button>
      <strong>
        {DOTTS_PREV}
        {currentPage}
        {DOTTS_NEXT}
      </strong>
      <button onClick={nextPage}>&#9654;</button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
};
Pagination.defaultProps = {
  currentPage: 1,
  prevPage: () => {},
  nextPage: () => {},
};

export default Pagination;
