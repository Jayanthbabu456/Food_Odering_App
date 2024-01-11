import React from "react";
import Logo from "../Logo.png";
const Header = () => {
  return (
    <div className="bg-orange-100 shadow-xl  rounded-md w-[95%] mx-auto px-5 py-1">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Food" className="w-[80px] cursor-pointer" />
        <nav className="w-[30%] mr-5">
          <ul className="flex justify-between items-center text-black text-[20px] cursor-pointer font-Montserrat font-semibold">
            <li className="text-orange-500 hover:text-orange-700">Home</li>
            <li className="text-orange-500 hover:text-orange-700">About Us</li>
            <li className="text-orange-500 hover:text-orange-700">
              Contact Us
            </li>
            <li className="text-orange-500 hover:text-orange-700">Cart</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
