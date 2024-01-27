import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import RestaurantMenuTop from "./RestaurantMenuTop";
import RestaurantMenuinfo from "./RestaurantMenuinfo";

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

  if (!resinfo || resinfo.length === 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5 min-h-[550px]">
      <RestaurantMenuTop resinfo={resinfo} />

      <div className="flex flex-col gap-[30px] font-Montserrat w-[80%] mx-auto mt-[30px] px-5">
        <RestaurantMenuinfo resinfo={resinfo} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
