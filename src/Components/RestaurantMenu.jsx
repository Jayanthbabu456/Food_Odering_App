import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

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

  const shortdesc = (word, maxLength) => {
    if (word && word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word;
  };
  if (!resinfo || resinfo.length === 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5 min-h-[550px]">
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

      <div className="flex flex-col gap-[30px] font-Montserrat w-[80%] mx-auto mt-[30px] px-5">
        {/* verifying all regular cards */}
        {regularCards &&
          regularCards.map((regularCard, index) => (
            <div key={index}>
              <p className="font-bold font-Montserrat text-[24px]">
                {regularCard?.card?.card?.title}
              </p>
              {/* regular cars directly interacted with itemcards */}
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
                      <div className=" mt-[20px]">
                        <p className="font-Montserrat text-[16px] font-medium">
                          {shortdesc(item?.card?.info?.description, 50)}
                        </p>
                      </div>
                    </div>
                    <div className="w-[120px] relative">
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
              {/* regular cards inside the categories */}
              {regularCard?.card?.card?.categories &&
                regularCard?.card?.card?.categories.map(
                  (category, catIndex) => (
                    <div key={catIndex}>
                      <p className="font-semibold text-[20px] mt-[20px] text-orange-500">
                        {category?.title}
                      </p>
                      {category?.itemCards &&
                        category?.itemCards.map((item, key) => (
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
                              <div className="mt-[20px]">
                                <p className="font-Montserrat text-[16px] font-medium">
                                  {shortdesc(item?.card?.info?.description, 50)}
                                </p>
                              </div>
                            </div>
                            <div className="w-[120px] relative">
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
                    </div>
                  )
                )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
