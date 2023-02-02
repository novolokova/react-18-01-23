import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom";
import UsersLoader from "./components/UsersLoader";

// import WindowSize from './components/WindowSize';
// import WindowSize from './components/WindowSize/index';
// import SingInForm from './components/form/SingInForm/index';
// import StopWatch from './components/StopWatch/index';


// function Dash (){}

function App() {
  return (
    <>
   
      <UsersLoader/>
    {/* <WindowSize/> */}

      </>
)}
//   <BrowserRouter>
//   <nav>
//     <ul>
//       <li><NavLink to='/'>HOME</NavLink></li>
//       <li><NavLink to='/sing-in'>SingInForm</NavLink></li>
//       <li><NavLink to='/stop-watch'>StopWatch</NavLink></li>
//       <li><NavLink to='/dash'>DASH</NavLink>
//       <ul>
//         <li></li>
//       </ul>
//       </li>
//     </ul>
//   </nav>
//   <Routes>
//     <Route path="/" element={<WindowSize/>}/>
//     <Route path="/sing-in" element={<SingInForm />}/>
//     <Route path="/stop-watch" element={<StopWatch />}/>
//     <Route path="/dash" element={<Dash />}/>
//   </Routes>
//   </BrowserRouter>
    
//   );
// }

// const Home =()=> <h1>Home</h1>;
// const About =()=> <h1>About <Link to='/'>Home</Link></h1>;
// const Contacts =()=> <h1>Contacts</h1>;

export default App;
