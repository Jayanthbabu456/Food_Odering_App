import React from "react";
import Food from "../Food.avif";
const RestaurantCard = () => {
  return (
    <div className="bg-orange-200 w-[250px] h-[320px] px-[8px] py-[8px] rounded-sm shadow-lg cursor-pointer font-Montserrat text-[17px] flex flex-col gap-[10px] font-medium">
      <div className="w-[100%] h-[60%]">
        <img src={Food} alt="Food" className="w-[100%] h-[100%]" />
      </div>
      <div>
        <h3>Meghana Foods</h3>
        <p>Biryani,North Indian,Asian</p>
        <p>4.4 stars</p>
        <p>38 mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
