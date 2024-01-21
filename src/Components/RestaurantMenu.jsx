import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.571581&lng=80.683767&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await response.json();
      console.log(json);
      setResinfo(json.data);
    };

    fetchMenu();
  }, [resId]);

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines = [],
    expectationNotifiers = [],
    areaName,
  } = resinfo?.cards[0]?.card?.card?.info || {};
  const enrichedText = expectationNotifiers[0]?.text;

  const regularCards =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(regularCards);

  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5 min-h-[550px]">
      <div className="flex justify-between items-center w-[80%] mx-auto px-[20px]">
        <div className="font-Montserrat">
          <p className="text-[18px] font-bold">{name}</p>
          <p className="text-[16px] font-medium">
            {cuisines.join(", ")},{enrichedText}
          </p>
          <p className="text-[16px] font-medium"> {areaName}</p>
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

      <div className="flex flex-col gap-[30px] font-Montserrat w-[80%] mx-auto mt-[30px] px-5">
        {regularCards &&
          regularCards.map((regularCard, index) => (
            <div key={index}>
              <p className="font-bold font-Montserrat text-[24px]">
                {regularCard?.card?.card?.title}
              </p>
              {regularCard?.card?.card?.itemCards &&
                regularCard?.card?.card?.itemCards.map((item, key) => (
                  <div
                    key={item?.card?.info?.id}
                    className="flex flex-row justify-between items-center w-[100%] mx-auto border-b border-orange-400 h-[160px]"
                  >
                    <div className="font-Montserrat">
                      <p className="text-[18px] font-semibold">
                        {item?.card?.info?.name}
                      </p>
                      <p className="text-[16px] font-medium">
                        ₹{item?.card?.info?.price / 100}
                      </p>
                    </div>
                    <div className="w-[100px] relative">
                      <img
                        src={
                          item?.card?.info?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`
                            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kew4g6ryhoznenaqwzyi"
                        }
                        alt={item?.name}
                        className="w-[100%] h-[100%] rounded-lg cursor-pointer object-cover"
                      />
                      <button className="bg-orange-400 text-[14px] font-semibold px-[10px] py-[4px] rounded-md absolute bottom-[-10px] left-[24px]">
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
