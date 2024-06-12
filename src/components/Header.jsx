import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" flex gap-5 justify-center items-center w-full mb-10 sm:mb-5  ">
      <img id="logo" className=" w-20 md:w-40" src={logo} alt="React Logo" />
      <h1 className=" text-[27px] sm:text-7xl md:text-8xl font-[Codystar]">
        The React Quiz
      </h1>
    </div>
  );
};

export default Header;
