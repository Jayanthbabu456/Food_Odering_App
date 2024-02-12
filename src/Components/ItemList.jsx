import React from "react";
import ItemCategory from "./ItemCategory";
const ItemList = ({ items, items1, handleClick, showItems }) => {
  const shortdesc = (word, maxLength) => {
    if (word && word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word;
  };

  return (
    <div>
      {items &&
        items.map((item, key) => (
          <div
            key={item?.card?.info?.id}
            className="flex flex-row justify-between items-center w-[95%] mx-auto border-b border-orange-400 h-[160px]"
          >
            <div className="font-Montserrat">
              <p className="text-[18px] font-semibold">
                {item?.card?.info?.name}
              </p>
              <p className="text-[16px] font-medium">
                ₹{item?.card?.info?.price / 100}
              </p>
              <div className=" mt-[20px]">
                <p className="font-Montserrat text-[16px] font-medium">
                  {shortdesc(item?.card?.info?.description, 50)}
                </p>
              </div>
            </div>
            <div className="w-[120px] h-[100px] relative">
              <img
                src={
                  item?.card?.info?.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`
                    : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kew4g6ryhoznenaqwzyi"
                }
                alt={item?.name}
                className="w-[100%] h-[100%] rounded-lg cursor-pointer object-cover"
              />

              <button className="bg-orange-400 text-[14px] font-semibold px-[12px] py-[4px] rounded-md absolute bottom-[-10px] left-[32px]">
                ADD
              </button>
            </div>
          </div>
        ))}

      {items1 &&
        items1.map((category, key) => (
          <ItemCategory
            key={category?.title}
            items1={category}
            showItems={showItems}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default ItemList;
