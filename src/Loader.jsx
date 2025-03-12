import { useState, useEffect } from "react";

const Loader = () => {
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let interval;
    if (showLoader) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) return prev + 1;
          clearInterval(interval);
          setTimeout(() => setShowLoader(false), 500); // Hide after reaching 100
          return prev;
        });
      }, 20); // 100 steps in 2000ms (2s)
    }

    return () => clearInterval(interval);
  }, [showLoader]);

  return (
    <div
      className="loader-main flex"
      style={{
        transform: showLoader ? "translateY(0px)" : "translateY(-100%)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <h1>{count}%</h1>
    </div>
  );
};

export default Loader;
