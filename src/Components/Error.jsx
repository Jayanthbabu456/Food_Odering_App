import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-4 py-5 px-5  h-[95vh] flex flex-col justify-center items-center">
      <div className=" font-Montserrat ">
        <p className="text-[200px] animate-bounce">{err.status}</p>
        <p className="text-[80px]">{err.statusText}</p>
      </div>
      <Link to="/">
        <button className="bg-orange-400 hover:bg-orange-500 font-bold font-Montserrat px-[20px] py-[8px] rounded-md text-[30px] text-black cursor-pointer mt-[30px]">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
