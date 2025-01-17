import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable => Super powerful variable        (Hooks)

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect() called");
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Normal JS Variable
  // //  let listOfRestaurants = [];
  // listOfRestaurants = resList.map((resList) => {
  //   return resList;
  // });

  return listOfRestaurants.length === 0 ? (
    <div>
      <div className="searchShimmer">
        <div className="shimmerSearch"></div>
      </div>
      <div className="filterShimmer">
        <div className="btnShimmer"></div>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
