import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const windowHeight = window.innerHeight;

  const handleScroll = (event) => {
    event.preventDefault();

    const scrollDelta = event.deltaY;
    let newActiveComponent = activeComponent;

    if (scrollDelta > 0 && activeComponent < 3) {
      newActiveComponent = activeComponent + 1;
    } else if (scrollDelta < 0 && activeComponent > 1) {
      newActiveComponent = activeComponent - 1;
    }

    setActiveComponent(newActiveComponent);

    window.scrollTo({
      top: (newActiveComponent - 1) * windowHeight,
      behavior: "smooth",
    });
  };

  const handleBoxClick = (componentNumber) => {
    setActiveComponent(componentNumber);
    window.scrollTo({
      top: (componentNumber - 1) * windowHeight,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Home") {
      setActiveComponent(1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleWheel = (event) => {
      handleScroll(event);
    };
    document.body.classList.add("hide-scrollbar");

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("hide-scrollbar");

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeComponent]);

  return (
    <div>
      <NavBar />
      <div className="scroll-container">
        <div className="component-boxes">
          <div
            className={`component-box ${activeComponent === 1 ? "active" : ""}`}
            onClick={() => handleBoxClick(1)}
          ></div>
          <div
            className={`component-box ${activeComponent === 2 ? "active" : ""}`}
            onClick={() => handleBoxClick(2)}
          ></div>
          <div
            className={`component-box ${activeComponent === 3 ? "active" : ""}`}
            onClick={() => handleBoxClick(3)}
          ></div>
        </div>
        <div className="components">
          <Component1 />
          <Component2 />
          <Component3 />
        </div>
      </div>
    </div>
  );
};

export default App;
