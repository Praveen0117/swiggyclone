import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredReasturants, setFilteredReasturants] = useState([])
  const [searchText, setSearchText] = useState("");

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3588522&lng=78.4009312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredReasturants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    

  };

  const handleTopRatedClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredReasturants(filteredList);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText)
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredReasturants(filteredList);
  };

  return (<RestaurantCard /> == null) ? <Shimmer/> : (
    <div className="flex justify-center align-middle items-center ">
      <div className="flex flex-col w-[90%]">
          <div className="flex justify-between m-5">
            <h1 className="text-[28px] font-bold">Top Rated Restaurants in Hyderabed </h1>
            <div className="">
              <button className="pr-4 font-bold text-sky-400" onClick={handleTopRatedClick}>Top Rated Restaurants</button>
              <input
                className= "rounded-md border-2 h-10 w-[300px] p-3" 
                type="search"
                placeholder="Restaurants"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <ul className="flex flex-wrap pr-3">
              {filteredReasturants && filteredReasturants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurant={restaurant}
                />
                
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Body;