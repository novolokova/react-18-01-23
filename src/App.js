import React from "react";
import LogInForm from "./components/form/LogInForm";
import { LOG_IN_SCHEMA } from './utils/validationSchemas';


function App() {
  const userDataLogIn = {
    login: "qw erty",
    password: "gr3at@3wdsG",
  };
  console.log(
    LOG_IN_SCHEMA.validate(userDataLogIn)
      .then((values) => console.log(values))
      .catch((err)=> console.log(err))
  );
  return (
    <>
      <LogInForm />
    </>
  );
}
export default App;

// gr3at@3wdsG

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
