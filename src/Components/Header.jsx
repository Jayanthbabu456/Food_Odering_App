import React from "react";
import Logo from "../Logo.png";
import { Link, useNavigate } from "react-router-dom";
import UserOnlineStatus from "../utils/UserOnlineStatus";
import { useSelector } from "react-redux";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = UserOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-orange-100 shadow-xl  rounded-md w-[95%] mx-auto px-5 py-1">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Food" className="w-[80px] cursor-pointer" />
        </Link>
        <nav className="w-[45%] mr-5">
          <ul className="flex justify-between items-center text-black text-[20px] cursor-pointer font-Montserrat font-semibold">
            <Link to="/app/home">
              <li className="text-orange-500 hover:text-orange-700">Home</li>
            </Link>
            <Link to="/app/about">
              <li className="text-orange-500 hover:text-orange-700">
                About Us
              </li>
            </Link>
            <Link to="/app/contact">
              <li className="text-orange-500 hover:text-orange-700">
                Contact Us
              </li>
            </Link>
            <Link to="/app/cart">
              <li className="text-orange-500 hover:text-orange-700">
                Cart-({cartItems.length} items)
              </li>
            </Link>

            <button
              className="bg-orange-400 hover:bg-orange-500 font-semibold font-Montserrat px-[20px] py-[8px] rounded-md text-[18px] text-black cursor-pointer"
              onClick={handleSignout}
            >
              Logut
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
