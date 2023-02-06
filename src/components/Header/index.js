import React, { Component } from "react";
import {LightMode, Brightness4} from '@mui/icons-material'
// import LightModeIcon from '@mui/icons-material/LightMode';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
import cx from "classnames";
import { ThemeContext, UserContext } from "../../contexts";
import styles from "./Header.module.scss";
import { CONSTANTS } from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    return (
      // Consumer в якості параметра приймає функцію, тільки всередені ф-ції можна отримати та застосувати тему
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const classNames = cx(styles.header,{
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <UserContext.Consumer>
              {(user) => (
                <header className={classNames}>
                  <strong>hi, {user.firstName}</strong>
                  <span
                    onClick={() => {
                      const newTheme =
                        theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                      setTheme(newTheme);
                    }}
                  >
                    {theme === THEMES.LIGHT ? <Brightness4/> :<LightMode/>}
                  </span>
                </header>
              )}
            </UserContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
