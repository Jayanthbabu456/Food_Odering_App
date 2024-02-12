import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";
const RestaurantCategories = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    setshowItems(!showItems);
  };
  const categories = data?.categories || [];
  console.log(categories);
  return (
    <div>
      {/* header */}
      <div className=" bg-orange-200 shadow-lg rounded-md px-[10px] py-[10px] cursor-pointer">
        <div
          className="flex justify-between items-center px-[10px]"
          onClick={handleClick}
        >
          <p className="font-bold font-Montserrat text-[20px] ">
            {data?.itemCards
              ? `${data?.title}(${data?.itemCards.length})`
              : data?.title}
          </p>
          <FontAwesomeIcon icon={faCaretDown} className="text-[25px] " />
        </div>

        {/* ACC Body */}

        {showItems && (
          <ItemList
            items={data?.itemCards || []}
            items1={categories}
            handleClick={handleClick}
            showItems={showItems}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategories;
