import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props 
 * @param {string} props.currentResults 
 * @param {function} props.resultHandler
 * @returns 
 */
function UsersList (props)  {

    const { currentResults, resultHandler } = props;

    return (
        <div>
          
          amount:
          <label>
            <input
              onChange={resultHandler}
              name="results"
              type="radio"
              value={3}
              checked={currentResults === "3"}
            />
            3
          </label>
          <label>
            <input
              onChange={resultHandler}
              name="results"
              type="radio"
              value={5}
              checked={currentResults === "5"}
            />
            5
          </label>
          <label>
            <input
              onChange={resultHandler}
              name="results"
              type="radio"
              value={7}
              checked={currentResults === "7"}
            />
            7
          </label>
         
        </div>
    );
};

UsersList.propTypes = {
  currentResults:PropTypes.string.isRequired,
  resultHandler:PropTypes.func,
};


export default UsersList;
