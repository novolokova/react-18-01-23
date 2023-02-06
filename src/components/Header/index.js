import React, { Component } from "react";
import { UserContext } from "../../contexts/index";

class Header extends Component {
  renderUserContext = (user) => <header>hi, {user.firstName}</header>;
  render() {
    return (
      <UserContext.Consumer>{this.renderUserContext} </UserContext.Consumer>
    );
  }
}
// Header.contextType = UserContext; //не зручно тільки один Context

export default Header;
