import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div className="hero-section text-center ">
        <h1>Hi, I'm Michael</h1>
        <p>A Computer Science student at UW-Madison...</p>

      </div>
    </div>
  );
};

export default App;
