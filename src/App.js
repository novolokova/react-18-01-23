import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import WindowSize from "./components/WindowSize";
import SingInForm from './components/form/SingInForm';
import StopWatch from './components/StopWatch';
import Error from './components/Error';
import Dashboard from './pages/Dashboard';


function App() {
  return (

    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/sing-in'>SingInForm</NavLink></li>
        <li><NavLink to='/stop-watch'>StopWatch</NavLink></li>
        <li><NavLink to='/dash-board'>Dashboard</NavLink>
          <ul>
            <li><NavLink to='/dash-board/messages/'>messages</NavLink></li>
            <li><NavLink to='/dash-board/tasks/'>tasks</NavLink> </li>
            <li><NavLink to='/dash-board/users/'>users</NavLink> </li>
          </ul>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<WindowSize/>}/>
      <Route path="/sing-in" element={<SingInForm />}/>
      <Route path="/stop-watch" element={<StopWatch />}/>
        <Route path="/dash-board" element={<Dashboard />}>
            <Route path="messages" element={<h2>messages, messages</h2>}/>
            <Route path="tasks" element={<h2>tasks, tasks</h2>}/>
            <Route path="users" element={<h2>users, users</h2>}/>
        </Route> 
      <Route path="*" element={<Error />}/>   
    </Routes>
    <footer>&copy; 2023</footer>
    </BrowserRouter>
   
    </>
  )}
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
export default App;
