import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (step <= 6) {
      setTimeout(() => {
        setStep(step + 1);
      }, 3000);
    } else {
      setStep(1);
    }
  }, [setStep, step]);
  return (
    <>
      <header className="header flex">
        <h1 className="logo flex">
          S <div className="line"></div> D
        </h1>
        <div className="menu-bars flex col">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <div className="main-container flex col">
        <div className="top-container flex col">
          <h1>Studio</h1>
          <h1>devioo</h1>
        </div>
        <div className="about flex col">
          <div className="line flex">
            <h2>01.</h2>
            <h1>ELEVATING DIGITAL EXPERIENCES</h1>
            <button className="flex">my services</button>
          </div>
          <h1 className="heading">
            I craft elegant websites and memorable digital experiences that
            blend timeless style with seamless functionality. <br /> My designs
            aim for simplicity and beauty, alongside smooth interaction and
            refined visual storytelling.
          </h1>
        </div>
        <div className="about highlights flex col">
          <div className="line flex">
            <h2>02.</h2>
            <h1>highlights</h1>
            <button className="flex">my projects</button>
          </div>
          <div className="main-highlights flex col">
            <img
              src={`/` + step + `.png`} // Shortened ternary logic
              alt=""
              className="slide-animation"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
