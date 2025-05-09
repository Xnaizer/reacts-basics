import { useState } from "react";

// function App() {
//   return (
//     <div className="steps">
//       <div className="numbers">
//         <div className="active">1</div>
//         <div className="">2</div>
//         <div className="">3</div>
//       </div>
//       <p className="message">Step: Dream</p>
//       <div className="buttons">
//         <button style={{backgroundColor: "#526d82", color: "#fff"}} onClick={() => alert("Prev Button On Clicked")}>Prev</button>
//         <button style={{backgroundColor: "#526d82", color: "#fff"}} onClick={() => alert("Next Button On Clicked")}>Next</button>
//       </div>
//     </div>
//   );
// }


const stepItems = ["Dream", "Believe", "Achieve"];
function App() {
  return (
    <>
      <Step />
    </>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {stepItems[step - 1]}
          </p>
          <div className="buttons">
            <button
              className="previous"
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="next"
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
