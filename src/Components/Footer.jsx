import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto px-5 py-5 flex justify-center items-center">
      <p className="font-medium font-Montserrat text-[16px]">
        Created By
        <a
          href="https://www.linkedin.com/in/jayanth-babu-55b4b3256/"
          className="text-orange-500"
        >
          {" "}
          Jayanth Babu
        </a>{" "}
        <FontAwesomeIcon icon={faCopyright} /> {year}
      </p>
    </div>
  );
};

export default Footer;
