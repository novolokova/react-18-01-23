import React from "react";
import cx from 'classnames';
import UserCard from "../UserSection/UserCard";
import { ThemeContext, UserContext } from "../../contexts";
import styles from "./Parent.module.scss";
import {CONSTANTS} from '../../constants'
const {THEMES} = CONSTANTS;


const Parent = () => {
  const renderUserContext = (user) => <UserCard user={user} />;
  return ( // Consumer в якості параметра приймає функцію
    <ThemeContext.Consumer>
      {([theme]) => {
const classNames = cx({
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
})
      return (
        <section className={classNames}>
          <h1>Perent</h1>
          <UserContext.Consumer>{renderUserContext}</UserContext.Consumer>
        </section>
      )}}
    </ThemeContext.Consumer>
  );
};

export default Parent;
