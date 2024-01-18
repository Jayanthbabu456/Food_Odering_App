import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.571581&lng=80.683767&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (!resList || resList.length === 0) {
    return (
      <Shimmer
        resList={resList}
        setresList={setresList}
        fetchData={fetchData}
      />
    );
  }
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 flex flex-col gap-[30px] py-5 px-5  min-h-[550px]">
      {/* top search div */}
      <div>
        <div className="w-[80%] mx-auto flex gap-[10px] justify-center items-center">
          <input
            type="search"
            placeholder="Search a restaurant..."
            className="w-[60%] border-2 border-orange-500 rounded-md text-[18px] outline-none h-10 pl-2 cursor-text font-Montserrat font-medium"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <div className="bg-orange-500 rounded-full py-2 px-3 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[18px] text-black"
              onClick={() => {
                console.log(searchText);
                const filteredres = resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredrestaurant(filteredres);
                setsearchText("");
              }}
            />
          </div>
        </div>
      </div>
      {/* filter List */}
      <div className="flex justify-between w-[90%] mx-auto">
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            fetchData();
          }}
        >
          All Restaurants
        </button>
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            const filteredList = filteredrestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList);
            setfilteredrestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        {filteredrestaurant && filteredrestaurant.length > 0 ? (
          filteredrestaurant.map((restaurant, key) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p className="text-[20px] font-Montserrat font-semibold">
            No restaurants available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
