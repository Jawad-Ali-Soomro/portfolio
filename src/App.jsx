import { useState } from "react";
import "./App.css";
import Aos from "aos";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showImg, setShowImg] = useState(false);

  window.addEventListener("mousemove", (e) => {
    const ball = document.querySelector(".ball");
    ball.style.left = e.clientX + "px";
    ball.style.top = e.clientY + "px";
  });

  Aos.init();

  return (
    <>
      <div className="ball"></div>
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
            <h2 data-aos="fade-up">01.</h2>
            <h1 data-aos="fade-up" data-aos-delay="200">
              ELEVATING DIGITAL EXPERIENCES
            </h1>
            <button data-aos="fade-up" data-aos-delay="400" className="flex">
              my services
            </button>
          </div>
          <h1 className="heading" data-aos="fade-right" data-aos-delay="200">
            I craft elegant websites and memorable digital experiences that
            blend timeless style with seamless functionality. <br /> My designs
            aim for simplicity and beauty, alongside smooth interaction and
            refined visual storytelling.
          </h1>
        </div>
        <div className="about highlights flex col">
          <div className="line flex">
            <h2 data-aos="fade-up">02.</h2>
            <h1 data-aos="fade-up" data-aos-delay="200">
              EXplore my projects
            </h1>
            <button className="flex" data-aos="fade-up" data-aos-delay="400">
              my projects
            </button>
          </div>
          <div className="projects flex col">
            <li
              className="flex"
              data-aos="fade-right"
              data-aos-delay="200"
              onMouseEnter={() => setShowImg(true)}
              onMouseLeave={() => setShowImg(false)}
            >
              {showImg && <img src="/4.png" alt="" />}
              <span>01.</span>ARTHUB.
            </li>
            <li
              className="flex"
              data-aos="fade-right"
              data-aos-delay="400"
              onMouseEnter={() => setShowImg(true)}
              onMouseLeave={() => setShowImg(false)}
            >
              {showImg && <img src="/2.png" alt="" />}
              <span>02.</span>siftp.
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="600"
              className="flex"
              onMouseEnter={() => setShowImg(true)}
              onMouseLeave={() => setShowImg(false)}
            >
              {showImg && <img src="/3.png" alt="" />}
              <span>03.</span>martt.
            </li>
            <li
              className="flex"
              data-aos="fade-right"
              data-aos-delay="800"
              onMouseEnter={() => setShowImg(true)}
              onMouseLeave={() => setShowImg(false)}
            >
              {showImg && <img src="/1.png" alt="" />}
              <span>04.</span>bookio.
            </li>
            <li
              className="flex"
              data-aos="fade-right"
              data-aos-delay="1000"
              onMouseEnter={() => setShowImg(true)}
              onMouseLeave={() => setShowImg(false)}
            >
              {showImg && <img src="/6.png" alt="" style={{ left: "20px" }} />}
              <span>05.</span>Eastern fulfil...
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
