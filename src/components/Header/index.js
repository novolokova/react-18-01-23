import React, { Component } from "react";
import { LightMode, Brightness4 } from "@mui/icons-material";
import cx from "classnames";
import styles from "./Header.module.scss";

import { WithTheme } from "../HOC";
import {WithUser} from "../HOC";
import { CONSTANTS } from "../../constants";
const { THEMES } = CONSTANTS;


class Header extends Component {
  handlerTheme = () => {
    const { theme, setTheme} = this.props;
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  };
  
  render() {
    const { theme, user } = this.props;
    const classNames = cx(styles.header, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <header className={classNames}>
        <strong>hi,{user.firstName}</strong>
        <span className={styles.theme} onClick={this.handlerTheme}>
          {theme === THEMES.LIGHT ? <Brightness4 /> : <LightMode />}
        </span>
      </header>
    );
  }
}
export default WithUser(WithTheme(Header)) ;

// const HeaderWithContext = () => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => <Header theme={theme} setTheme={setTheme} />}
//     </ThemeContext.Consumer>
//   );
// };
// const WithTheme = (InnerComponent) => (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => (
//         <InnerComponent theme={theme} setTheme={setTheme} />
//       )}
//     </ThemeContext.Consumer>
//   );
// };
//const HeaderWithContext = WithTheme(Header);

