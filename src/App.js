import React, { Component } from "react";

import Header from "./components/Header";
import Parent from "./components/Parent";
import { UserContext, ThemeContext } from "./contexts";
import {CONSTANTS} from './constants'
const {THEMES} = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
      theme: THEMES.LIGHT,
    };
  }
setTheme = (theme)=>this.setState({theme});

  render() {
    console.log(UserContext)
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
      <UserContext.Provider value={user}>
        <Header />
        <Parent />
      </UserContext.Provider>
      </ThemeContext.Provider >
    );
  }
}
export default App;

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
