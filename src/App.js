import { Component } from "react";
import "./App.css";
import CiaoSection from "./components/CiaoSection";

// 19.01.23 ***********************************
// function App() Refactor ---переписуємо на класс

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return <CiaoSection />;
  }
}

export default App;

//*********************************************** */

// 18.01.23 *********************************

// function App() {
//   const user = {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     avatar: 'http://localhost:3000/favicon.ico',
//   }
//   return (
//     // - <> - fragment (React.createFragment)

//       // якщо props має boolean значення то isHi (пример isHi={true}, isHi={false})
//       // true - пишемо isHi
//       // false - нічого
//       //ТОБТО!!!
//       // якшо в мене є щосьб якась сутність, то це 1-true,
//       // якщо немає або undefined 0 - false

//     <>
//       <h1 className="heading" title="JSX">
//         Hi, JSX
//       </h1>
//       <Ciao username={`${user.firstName} ${user.lastName}`} photo={user.avatar}/>
//       <Ciao username='Tom Pett'/>
//       <Ciao username='Steev'/>
//       <Ciao username='Ilon Mask'/>

//     </>
//   );

// // Add example without JSX (JSX - синтаксичний цукор ф-ції React.createElement!!!  )

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
//   // return React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement(
//   //     "header",
//   //     { className: "App-header" },
//   //     React.createElement("img", {
//   //       src: logo,
//   //       className: "App-logo",
//   //       alt: "logo",
//   //     }),
//   //     React.createElement(
//   //       "p",
//   //       {},
//   //       "Edit ",
//   //       React.createElement("code", {}, "src/App.js"),
//   //       " and save to reload."
//   //     ),
//   //     React.createElement(
//   //       "a",
//   //       {
//   //         className: "App-link",
//   //         href: "https://reactjs.org",
//   //         target: "_blank",
//   //         rel: "noopener noreferrer",
//   //       },
//   //       "Learn React"
//   //     )
//   //   )
//   // );
// }

// export default App;
