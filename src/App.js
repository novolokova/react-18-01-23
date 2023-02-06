import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Parent from "./components/Parent";
import { UserContext } from "./contexts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        <Header />
        <Parent />
      </UserContext.Provider>
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
