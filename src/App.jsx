import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import { motion, useScroll } from "framer-motion";

const App = () => {
  return (
    <div className=" w-full h-[4000px] bg-[#F8F5EF]">
      <Home></Home>
      
    </div>
  );
};

export default App;
