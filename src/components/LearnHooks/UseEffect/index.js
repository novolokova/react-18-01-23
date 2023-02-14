import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const handlerClick = () => {
      setCount((prevCount) => prevCount + 1);// це правильно!!!
      //setCount(count + 1); //- так не працює!!!
    };
    //add effect componentDidMount []
    console.log("add effect");
    document.body.addEventListener("click", handlerClick);
    return () => {
      //clean effect componentWillUnmount []
      console.log("clean effect");
      document.body.removeEventListener("click", handlerClick);
    }; // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
};


export default UseEffect;

// це додотак до App.js


// function App() {
//     const [isVisible, setIsVisible] = useState(true);
//     const handlerIsVisible = () => {
//       setIsVisible(!isVisible);
//     };
//     return (
//       <>
//         <button onClick={handlerIsVisible}>swich visible</button>
//         {isVisible && <LearnHooks />}
//       </>
//     );
//   }
