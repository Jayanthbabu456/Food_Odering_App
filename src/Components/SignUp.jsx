import React, { useRef, useState } from "react";
import { Checkvalidatedata } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import Loginheader from "./Loginheader";

const SignUp = () => {
  const [errormsg, seterrormsg] = useState("");
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");

  const handlebuttonclick = () => {
    const msg = Checkvalidatedata(email.current.value, password.current.value);
    seterrormsg(msg);
    if (msg) return;

    // sign up
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterrormsg(errorMessage);
      });
  };

  return (
    <div className="mt-[10px]">
      <Loginheader />
      <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5  min-h-[600px] flex flex-col justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-[400px] h-[500px] bg-orange-200 shadow-lg px-[20px] flex flex-col gap-[5px] py-[20px]">
            <p className="text-[24px] font-Montserrat font-bold text-center py-[10px]">
              SignUp
            </p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border-2 border-orange-300 bg-orange-100 outline-none px-[10px] py-[10px] text-[18px] rounded-md shadow-lg font-Montserrat"
            />
            <br />
            <input
              ref={email}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border-2 border-orange-300 bg-orange-100 outline-none px-[10px] py-[10px] text-[18px] rounded-md shadow-lg font-Montserrat"
            />
            <br />
            <input
              ref={password}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border-2 border-orange-300 bg-orange-100 outline-none px-[10px] py-[10px] text-[18px] rounded-md shadow-lg font-Montserrat"
            />
            <p className="font-semibold font-Montserrat text-[18px] text-red-500">
              {errormsg}
            </p>
            <button
              className="bg-orange-400 hover:bg-orange-500 font-semibold font-Montserrat px-[20px] py-[8px] rounded-md text-[18px] text-black cursor-pointer mt-[20px]"
              onClick={handlebuttonclick}
            >
              SignUp
            </button>
            <p className="text-[18px] font-Montserrat font-medium py-[10px] cursor-pointer">
              Already have an account?
              <span className="font-semibold font-Montserrat text-orange-700">
                <Link to="/">SignIn</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
