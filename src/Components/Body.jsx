import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestaurantCard from "./RestaurantCard";
const resObj = [
  {
    info: {
      id: "695744",
      name: "Bengaluru Bhavan",
      cloudinaryImageId: "6bfb48bb2346de77aeded4f829465ac3",
      locality: "Pinnamaneni Poly Clinic Road",
      areaName: "Benz Circle And Auto Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "North Indian", "Biryani", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "416232",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 11:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹500",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bengaluru-bhavan-pinnamaneni-poly-clinic-road-benz-circle-and-auto-nagar-vijayawada-695744",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "696967",
      name: "Idlee's",
      cloudinaryImageId: "66bb0ca0fcad3afd234dfd9b837cf62f",
      locality: "Praasadampadu Main Road",
      areaName: "Benz Circle and Auto Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "5273",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.4,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "8.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/idlees-praasadampadu-main-road-benz-circle-and-auto-nagar-vijayawada-696967",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "276843",
      name: "A1 Tiffins And Curry Point",
      cloudinaryImageId: "tjegtofh0ireefbcskho",
      locality: "Samba Murthy Road",
      areaName: "Gandhi Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Andhra"],
      avgRating: 4.3,
      veg: true,
      parentId: "25198",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 12:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a1-tiffins-and-curry-point-samba-murthy-road-gandhi-nagar-vijayawada-276843",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "410580",
      name: "Gymkhana Canteen",
      cloudinaryImageId: "t1f9vb0nimigld4mocht",
      locality: "Gandhinagar",
      areaName: "Gandhi Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "246517",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 9.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "9.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 12:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gymkhana-canteen-gandhinagar-gandhi-nagar-vijayawada-410580",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "113569",
      name: "Sri Sai Ram Fast Foods",
      cloudinaryImageId: "vt271ygte7p1q2wk98a4",
      locality: "Tikkle Road",
      areaName: "Labbipet",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "194484",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 10.2,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "10.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹350",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-sai-ram-fast-foods-tikkle-road-labbipet-vijayawada-113569",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "513999",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "zyv96nkuflrxf3a8inqx",
      locality: "Sriram Nagar",
      areaName: "Labbipet",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.7,
      veg: true,
      parentId: "582",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 10.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "10.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sriram-nagar-labbipet-vijayawada-513999",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "218609",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
      locality: "Ramachandra Rao Raod",
      areaName: "Suryarao Pet",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4444",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-ramachandra-rao-raod-suryarao-pet-vijayawada-218609",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "405703",
      name: "CakeZone",
      cloudinaryImageId: "e386a679bad57c2527925e5a22cd283a",
      locality: "K.K.R goutham school",
      areaName: "Sri Ramachandra Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      parentId: "7003",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 10.6,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "10.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cakezone-k-k-r-goutham-school-sri-ramachandra-nagar-vijayawada-405703",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "289589",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
      locality: "Gurnanak Colony Road",
      areaName: "Auto Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.3,
      parentId: "1",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c3b8512c-cd31-4a61-a619-cf2098ec995e",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-gurnanak-colony-road-auto-nagar-vijayawada-289589",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
  const [resList, setresList] = useState(resObj);
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 flex flex-col gap-[30px] py-5 px-5">
      {/* top search div */}
      <div>
        <div className="w-[80%] mx-auto flex gap-[10px] justify-center items-center">
          <input
            type="search"
            placeholder="Search a restaurant..."
            className="w-[60%] border-2 border-orange-500 rounded-md text-[18px] outline-none h-10 pl-2 cursor-text font-Montserrat font-medium"
          />
          <div className="bg-orange-500 rounded-full py-2 px-3 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[18px] text-black"
            />
          </div>
        </div>
      </div>
      {/* filter List */}
      <div className="flex justify-between w-[90%] mx-auto">
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            setresList(resObj);
          }}
        >
          All Restaurants
        </button>
        <button
          className="text-[16px] font-Montserrat font-semibold bg-orange-200 cursor-pointer border-2 border-black shadow-lg px-[8px] py-[8px] rounded-md outline-none"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setresList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
