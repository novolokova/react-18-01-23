import React, { useContext } from "react";
import { LightMode, Brightness4 } from "@mui/icons-material";
import cx from "classnames";
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./FuncHeader.module.scss";
import { CONSTANTS } from "../../constants";
const { THEMES } = CONSTANTS;


const FuncHeader = () => {
  const [user, setUser] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const handlerTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  };
  const classNames = cx(styles.header, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <header className={classNames}>
      <strong>hi,{user.name}</strong>
      <span onClick={handlerTheme}>
        {theme === THEMES.LIGHT ? <Brightness4 /> : <LightMode />}
        </span>
    </header>
  );
};
export default FuncHeader;

// for App() {

// function App() {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Brad Pitt",
//   });
//   const [theme, setTheme] = useState(THEMES.LIGHT);
//   return (
//     <ThemeContext.Provider value={[theme, setTheme]}>
//       <UserContext.Provider value={[user, setUser]}>
//         <BrowserRouter>
//           <FuncHeader />
//           <Routes>
//             <Route path="/" element={<UserProfile />} />
//           </Routes>
//         </BrowserRouter>
//       </UserContext.Provider>
//     </ThemeContext.Provider>
//     // <FuncStopWatch/>
//   );
//       }