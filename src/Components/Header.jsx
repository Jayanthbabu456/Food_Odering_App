import React, { useState } from "react";
import Logo from "../Logo.png";
const Header = () => {
  const [namebtn, setnamebtn] = useState("Login");
  return (
    <div className="bg-orange-100 shadow-xl  rounded-md w-[95%] mx-auto px-5 py-1">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Food" className="w-[80px] cursor-pointer" />
        <nav className="w-[40%] mr-5">
          <ul className="flex justify-between items-center text-black text-[20px] cursor-pointer font-Montserrat font-semibold">
            <li className="text-orange-500 hover:text-orange-700">Home</li>
            <li className="text-orange-500 hover:text-orange-700">About Us</li>
            <li className="text-orange-500 hover:text-orange-700">
              Contact Us
            </li>
            <li className="text-orange-500 hover:text-orange-700">Cart</li>
            <button
              className="bg-orange-400 hover:bg-orange-500 font-semibold font-Montserrat px-[20px] py-[8px] rounded-md text-[18px] text-black cursor-pointer"
              onClick={() => {
                namebtn === "Login"
                  ? setnamebtn("Logout")
                  : setnamebtn("Login");
              }}
            >
              {namebtn}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
