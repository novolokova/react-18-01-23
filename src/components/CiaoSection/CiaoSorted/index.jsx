import React, { Component } from "react";

class CiaoSorted extends Component {
  render() {
    const { isDirectionById, isDirectionByName, sortUsersById, sortByName } = this.props;
    return (
      <p>
        <button onClick={sortUsersById}>
          sort by id {isDirectionById ? "right" : "revert"}
        </button>
        <button onClick={sortByName}>
          sort by name {isDirectionByName ? "right" : "revert"}
        </button>
      </p>
    );
    
  }
}

export default CiaoSorted;
