import React from "react";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <header className="header flex">
        <h1 className="logo flex" onClick={() => (window.location.href = "/")}>
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
          className="main-menu flex col"
          style={{
            transform: showMenu ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {showMenu && (
            <div className="nav-menu flex col">
              <a href="/about" className="flex">
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
          <div className="links flex">
            <div className="copy-text flex">
              <span>&copy; STUDIO DEVIOO 2025</span>
            </div>
            <div className="copy-text github-link flex">
              <a href="https://github.com/jawad-ali-soomro" target="_blank">
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
