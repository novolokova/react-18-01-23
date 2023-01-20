import React, { Component } from "react";
import UserList from "./UserList";
import SelectedUserList from "./SelectedUserList";

const dbUsers = [
  {
    id: 3,
    firstName: "Brad",
    lastName: "Pitt",
  },
  {
    id: 2,
    firstName: "Ilon",
    lastName: "Mask",
  },
  {
    id: 1,
    firstName: "Tom",
    lastName: "Rott",
  },
  {
    id: 6,
    firstName: "Lia",
    lastName: "Staff",
  },
  {
    id: 5,
    firstName: "Bob",
    lastName: "Smit",
  },
  {
    id: 4,
    firstName: "Noa",
    lastName: "Benet",
  },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((user) => ({ ...user, isSelected: false })),
    };
  }
  userSelect = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUserList users={users} />
        <UserList users={users} userSelect={this.userSelect} />
      </>
    );
  }
}
export default UserSection;
