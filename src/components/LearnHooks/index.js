import React,{useState} from "react";


const LearnHooks = (props) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    console.log(count);
  
    const handlerStep = 
        ({target:{value}})=>{setStep(Number(value))};
      
  const handlerAdd = () => {
    setCount(count+step);
  };
  const handlerSub = () => {
    setCount(count-step);
  };
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handlerAdd}>+</button>
      <button onClick={handlerSub}>-</button>
      <input type="number" value={step} onChange={handlerStep}/>
    </div>
  );
};


export default LearnHooks;
