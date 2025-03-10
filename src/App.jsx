import { useState } from "react";
import "./App.css";
function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header flex">
        <h1 className="logo flex">
          S <div className="line"></div> D
        </h1>
        <div
          className="menu-bars flex col"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className="bar"
            style={{
              position: showMenu ? "absolute" : "",
              rotate: showMenu ? "45deg" : "0deg",
            }}
          ></div>
          <div
            className="bar"
            style={{
              transform: showMenu ? "translateX(-40px)" : "translateX(0)",
            }}
          ></div>
          <div
            className="bar"
            style={{
              position: showMenu ? "absolute" : "",
              rotate: showMenu ? "-45deg" : "0deg",
            }}
          ></div>
        </div>
        <div
          className="main-menu flex"
          style={{
            transform: showMenu ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {showMenu && (
            <div className="nav-menu flex col">
              <a href="/" className="flex">
                <span>01.</span>About
              </a>
              <a href="/" className="flex">
                <span>02.</span>Services
              </a>

              <a href="/" className="flex">
                <span>03.</span>Contact
              </a>
            </div>
          )}
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
            <h1>EXplore my projects</h1>
            <button className="flex">my projects</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
