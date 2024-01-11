import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 flex flex-col gap-[50px] py-5 px-5">
      {/* top search div */}
      <div className="flex flex-col gap-[20px]">
        <div className="w-[80%] mx-auto flex gap-[10px] justify-center items-center">
          <input
            type="search"
            placeholder="Search a restaurant..."
            className="w-[60%] border-2 border-orange-500 rounded-md text-[18px] outline-none h-10 pl-2 cursor-text"
          />
          <div className="bg-orange-500 rounded-full py-2 px-3 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[18px] text-black"
            />
          </div>
        </div>
      </div>
      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
