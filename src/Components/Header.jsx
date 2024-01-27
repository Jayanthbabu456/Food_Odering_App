import React, { useState } from "react";
import Logo from "../Logo.png";
import { Link } from "react-router-dom";
import UserOnlineStatus from "../utils/UserOnlineStatus";
const Header = () => {
  const [namebtn, setnamebtn] = useState("Login");
  const onlineStatus = UserOnlineStatus();
  return (
    <div className="bg-orange-100 shadow-xl  rounded-md w-[95%] mx-auto px-5 py-1">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Food" className="w-[80px] cursor-pointer" />
        </Link>
        <nav className="w-[40%] mr-5">
          <ul className="flex justify-between items-center text-black text-[20px] cursor-pointer font-Montserrat font-semibold">
            <Link to="/">
              <li className="text-orange-500 hover:text-orange-700">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-orange-500 hover:text-orange-700">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-orange-500 hover:text-orange-700">
                Contact Us
              </li>
            </Link>
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
              <span
                className={
                  onlineStatus
                    ? "ml-[6px] text-green-700 text-[18px]"
                    : "ml-[6px] text-red-700 text-[18px]"
                }
              >
                ●
              </span>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
