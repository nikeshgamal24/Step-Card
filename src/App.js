import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  return <>
    <Step/>
    <Step/>
  </>
}

 function Step() {
  // const step = 2;
  const [step, setState] = useState(1);
  // useState: React Hook that is used to set the default value to the state variable and return a array that consists of two elements i.e. default value and function to update the state variable

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setState(step - 1);
    
    //better way to update the state using the current state is using'******CALLBACK FUNCTION*******'
    if(step>1) setState((state)=>state-1);
  }

  function handleNext() {
    // if (step < 3) setState(step + 1);

    //better way to update the state using the current state is using'******CALLBACK FUNCTION*******'
    if (step < 3) setState((state)=>state+1);
  }

  return (
    <>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      {isOpen &&
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      }
    </>
  );
}
