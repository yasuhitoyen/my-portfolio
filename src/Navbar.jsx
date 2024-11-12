import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[65px] bg-white shadow-md flex flex-row items-center justify-between px-20 rounded-b-2xl hover:scale-[1.01] transition-all duration-500">
        <div className="flex flex-row items-center justify-between w-full">

		</div>
        <div className="flex flex-row items-center justify-between  w-full">
          <button className="hover:scale-[1.05] transition-all duration-500 text-[20px] font-light tracking-lighter">home</button>
          <button className="hover:scale-[1.05] transition-all duration-500 text-[20px] font-light tracking-lighter">projects</button>
          <button className="hover:scale-[1.05] transition-all duration-500 text-[20px] font-light tracking-lighter">resume</button>
          <button className="hover:scale-[1.05] transition-all duration-500 text-[20px] font-light tracking-lighter">contact</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
