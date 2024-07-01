import { satellite } from "fontawesome";
import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsInfo = (props) => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!resInfo) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, costForTwo, avgRating, slaString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(",")} - {costForTwo / 100}
      </p>
      {categories.map((category,index ) => (
        <ul className="w-6/12">
          {
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={ index === showIndex ? true : false}
              setShowIndex = { () => setShowIndex(index)}
            />
          }
        </ul>
      ))}
    </div>
  );
};

export default RestaurantsInfo;
