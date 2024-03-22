import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Model from "../public/Scene.jsx"; // Assuming this is the file containing your 3D model component
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "200vh" }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model
            position={[0, 0, 0]}
            rotation={[0, scrollPosition * 0.001 + 90, 0]}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
