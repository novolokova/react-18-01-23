import React, { useState, useReducer } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { MenuOpen } from "@mui/icons-material";
import { ThemeContext, UserContext, MenuContext } from "./contexts";
import { useClicker } from "./hooks";
import FuncHeader from "./components/FuncHeader";
import SignUpForm from "./components/form/SignUpForm";
import Chat from "./components/Chat";
import NavMenu from "./components/NavMenu";
import HomePage from "./pages/HomePage";
import { CONSTANTS } from "./constants";
const { THEMES } = CONSTANTS;

const reducer = (state, action) => {
  switch (action.type) {
    case "MENU_OPEN": {
      return { ...state, isMenuOpen: true };
    }
    case "MENU_CLOSE": {
      return { ...state, isMenuOpen: false };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });

  const [user, setUser] = useState({
    id: 1,
    name: "Brad Pitt",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const count = useClicker(1000);

  const menuOpen = (event) => {
    event.stopPropagation();
    dispatch({ type: "MENU_OPEN" })};
  const menuClose = () => dispatch({ type: "MENU_CLOSE" });
  return (
    <MenuContext.Provider value={[state, menuClose]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <MenuOpen onClick={menuOpen} />
            <NavMenu />
            <FuncHeader />
            <h2> Count from our hook useClicker {count}</h2>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="signup">Signup</NavLink>
                </li>
                <li>
                  <NavLink to="chat">Chat</NavLink>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </MenuContext.Provider>
    // <FuncStopWatch/>
  );
}
export default App;

// gr3at@3wdsG

//**************************************************************** */
// <>
// <BrowserRouter>
// <nav>
//   <ul>
//     <li><NavLink to='/'>HOME</NavLink></li>
//     <li><NavLink to='/sing-in'>SingInForm</NavLink></li>
//     <li><NavLink to='/stop-watch'>StopWatch</NavLink></li>
//     <li><NavLink to='/dash-board'>Dashboard</NavLink>
//       <ul>
//         <li><NavLink to='/dash-board/loader/'>loader</NavLink> </li>
//       </ul>
//     </li>
//   </ul>
// </nav>
// <Routes>
//   <Route path="/" element={<WindowSize/>}/>
//   <Route path="/sing-in" element={<SingInForm />}/>
//   <Route path="/stop-watch" element={<StopWatch />}/>
//     <Route path="/dash-board" element={<Dashboard />}>

//       <Route path="loader" element={<LoaderPage/>}/>
//     </Route>
//   <Route path="*" element={<Error />}/>
// </Routes>
// <footer>&copy; 2023</footer>
// </BrowserRouter>

// </>

//*********************************************** */
// МЕНЮ
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">HOME</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">ABOUT</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contacts">CONTACTS</NavLink>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </BrowserRouter>
//

// const Home = () => <h1>Home</h1>;
// const About = () => (
//   <h1>
//     About <Link to="/">Home</Link>
//   </h1>
// const Contacts = () => <h1>Contacts</h1>;
//******************************************************************* */
