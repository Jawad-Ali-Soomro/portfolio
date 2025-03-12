import "./App.css";
import Aos from "aos";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
function App() {
  window.addEventListener("mousemove", (e) => {
    const ball = document.querySelector(".ball");
    ball.style.left = e.clientX + "px";
    ball.style.top = e.clientY + "px";
  });

  Aos.init();

  return (
    <>
      <div className="ball"></div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
