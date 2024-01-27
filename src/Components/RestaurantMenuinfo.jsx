import React from "react";

const RestaurantMenuinfo = ({ resinfo }) => {
  const regularCards =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(regularCards);
  const shortdesc = (word, maxLength) => {
    if (word && word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word;
  };
  return (
    <div>
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
            {/* regular cards inside the categories */}
            {regularCard?.card?.card?.categories &&
              regularCard?.card?.card?.categories.map((category, catIndex) => (
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
              ))}
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenuinfo;
