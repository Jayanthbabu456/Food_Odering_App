import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Shimmer = ({ fetchData, resList, setresList }) => {
  return (
    <div className="flex flex-wrap bg-orange-100 gap-[30px] w-[95%] mx-auto my-2 py-5 px-5 ">
      {/* top search div */}
      <div className="w-full">
        <div className="w-[80%] mx-auto flex gap-[10px] justify-center items-center">
          <input
            type="search"
            placeholder="Search a restaurant..."
            className="w-[60%] border-2 border-orange-500 rounded-md text-[18px] outline-none h-10 pl-2 cursor-text font-Montserrat font-medium"
          />
          <div className="bg-orange-500 rounded-full py-2 px-3 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[18px] text-black"
            />
          </div>
        </div>
      </div>
      {/* filter List */}
      <div className="flex justify-between w-[90%] mx-auto">
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            fetchData();
          }}
        >
          All Restaurants
        </button>
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setresList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {/* restaurant div */}
      <div className="justify-center items-center flex flex-wrap gap-[20px] ">
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
        <div className="bg-orange-300 w-[300px] h-[280px] px-[12px] py-[12px] rounded-md flex flex-col gap-[20px] shadow-lg animate-pulse">
          <div className="w-[100%] h-3/5 bg-orange-100 rounded-md"></div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[90%] bg-orange-100 h-4 rounded-sm"></div>
            <div className="w-[80%] bg-orange-100 h-4 rounded-sm"></div>
          </div>
          <div className="w-[100%] bg-orange-100 h-4 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
