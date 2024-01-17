import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = ({ resData }) => {
  const shortcuisines = (word, maxLength) => {
    if (word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word;
  };
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { lastMileTravelString } = resData?.info?.sla;
  return (
    <div className="bg-orange-200 w-[300px] h-[300px] px-[12px] py-[12px] rounded-sm shadow-lg cursor-pointer font-Montserrat text-[17px] flex flex-col gap-[6px] font-medium  transform transition-transform duration-300 hover:scale-105 ">
      <div className="w-[100%] h-3/5">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt="Food"
          className="w-[100%] h-[100%] object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="font-semibold overflow-hidden whitespace-nowrap text-overflow-ellipsis">
          {name}
        </p>
        <p className="font-medium">{shortcuisines(cuisines.join(", "), 20)}</p>
        <div className="flex  items-center justify-between mt-2">
          <div className="flex justify-center items-center gap-[2px]  bg-green-600 text-white px-[2px] py-[3px] rounded-md  w-[20%] text-[14px]">
            <FontAwesomeIcon icon={faStar} />
            <p>{avgRating}</p>
          </div>
          <div className="flex text-8px font-medium gap-[15px]">
            <div className="flex items-center gap-[5px]">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="font-semibold">{lastMileTravelString}</p>
            </div>
            <p className="font-semibold">{costForTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
