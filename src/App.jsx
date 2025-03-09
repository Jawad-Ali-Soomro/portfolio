import "./App.css";

function App() {
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
      </div>
    </>
  );
}

export default App;
