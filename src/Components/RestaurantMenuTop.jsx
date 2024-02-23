import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RestaurantMenuTop = ({ resinfo }) => {
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines = [],
    expectationNotifiers = [],
    areaName,
  } = resinfo?.cards[2]?.card?.card?.info || {};
  const enrichedText = expectationNotifiers[0]?.text;
  return (
    <div className="flex justify-between items-center w-[80%] mx-auto px-[20px]">
      <div className="font-Montserrat">
        <p className="text-[24px] font-bold">{name}</p>
        <p className="text-[20px] font-medium">
          {cuisines.join(", ")},{enrichedText}
        </p>
        <p className="text-[18px] font-medium"> {areaName}</p>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-center items-center gap-[8px] bg-green-600 text-white px-[5px] py-[5px] rounded-md text-[16px] font-Montserrat">
          <FontAwesomeIcon icon={faStar} />
          <p className="font-semibold">{avgRating}</p>
        </div>
        <p className="text-[18px] font-Montserrat font-semibold">
          {costForTwoMessage}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenuTop;
