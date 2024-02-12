import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import CategoryList from "./CategoryList";
const ItemCategory = ({ items1, handleClick, showItems }) => {
  return (
    <div className="">
      {/* header */}
      <div className=" py-[10px] w-[90%] mx-auto">
        <div
          className="flex justify-between items-center px-[10px]"
          onClick={handleClick}
        >
          <p className="font-bold font-Montserrat text-[20px]  text-orange-500">
            {items1?.title}({items1?.itemCards?.length})
          </p>
          <FontAwesomeIcon icon={faCaretDown} className="text-[25px] " />
        </div>

        {/* ACC Body */}

        {showItems && (
          <CategoryList
            handleClick={handleClick}
            showItems={showItems}
            items1={items1}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCategory;
