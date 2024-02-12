import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenuinfo = ({ resinfo }) => {
  const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(categories);

  return (
    <div className="flex flex-col gap-[15px]">
      {/* categories accordian */}
      {categories &&
        categories.map((category, key) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
    </div>
  );
};

export default RestaurantMenuinfo;
