import React from "react";
import UserCard from "../UserSection/UserCard/index";
import { UserContext } from "../../contexts/index";

const Parent = () => {
  const renderUserContext = (user) => <UserCard user={user} />;
  return (
    <section>
      <h1>Perent</h1>
      <UserContext.Consumer>{renderUserContext}</UserContext.Consumer>
    </section>
  );
};

export default Parent;
