import React, { useState } from "react";
// import LearnHooks from "./components/LearnHooks";
import FuncStopWatch from './components/FuncStopWatch/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './contexts/index';
import UserProfile from './components/UserProfile/index';
import FuncHeader from './components/FuncHeader/index';

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Brad Pitt",
  });
  return (
    // <UserContext.Provider value={[user, setUser]}>
    //   <BrowserRouter>
    //   <FuncHeader>
    //     <Routes>
    //       <Route path="/" element={<UserProfile />} />
    //     </Routes>
    //     </FuncHeader>
    //   </BrowserRouter>
    // </UserContext.Provider>
    <FuncStopWatch/>
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
