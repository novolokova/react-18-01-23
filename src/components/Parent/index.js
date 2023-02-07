import React from "react";
import cx from "classnames";
import UserCard from "../UserSection/UserCard";
import { WithTheme, WithUser } from "../HOC";
import styles from "./Parent.module.scss";
import { CONSTANTS } from "../../constants";
const { THEMES } = CONSTANTS;

const Parent = (props) => {
  const { theme, user } = props;
  const classNames = cx({
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <section className={classNames}>
      <h1>Perent</h1>
      <UserCard user={user} />
    </section>
  );
};
export default WithTheme(WithUser(Parent));

// const ParentWithContext = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => <Parent theme={theme} setTheme={setTheme} />}
//     </ThemeContext.Consumer>
//   );
// };
// const WithTheme = (InnerComponent) => (props)=>{
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => <InnerComponent theme={theme} setTheme={setTheme} />}
//     </ThemeContext.Consumer>
//   );
// }
//const ParentWithContext = WithTheme(Parent);