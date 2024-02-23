import React from "react";
import Logo from "../Logo.png";
import { Link } from "react-router-dom";

const Loginheader = () => {
  return (
    <div className="bg-orange-100 shadow-xl  rounded-md w-[95%] mx-auto px-5 py-1">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Food" className="w-[80px] cursor-pointer" />
        <div className="flex gap-[15px]">
          <Link to="/">
            <button className="bg-orange-400 hover:bg-orange-500 font-semibold font-Montserrat px-[20px] py-[8px] rounded-md text-[20px] text-black cursor-pointer">
              SignIn
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-orange-400 hover:bg-orange-500 font-semibold font-Montserrat px-[20px] py-[8px] rounded-md text-[20px] text-black cursor-pointer">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginheader;
