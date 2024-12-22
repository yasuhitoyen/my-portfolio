import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import { motion, useScroll } from "framer-motion";

const App = () => {
  return (
    <div className=" w-full h-[4000px] c1">
      <Home></Home>
      
    </div>
  );
};

export default App;
