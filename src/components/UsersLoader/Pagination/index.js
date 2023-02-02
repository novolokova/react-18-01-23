import React from 'react';
import PropTypes from 'prop-types';

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
    const {currentPage, prevPage, nextPage}= props;
    return (
        <div>
        <button onClick={prevPage}>&#9664;</button>
        <strong>... {currentPage} ...</strong>
        <button onClick={nextPage}>&#9654;</button>
       
        </div>
    );
};
// винести &#9654;  ... 

Pagination.propTypes = {
currentPage: PropTypes.number.isRequired,
prevPage: PropTypes.func, 
nextPage: PropTypes.func,

};

export default Pagination;
