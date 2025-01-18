import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable => Super powerful variable        (Hooks)

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
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
        <div className="filterShimmer">
          <div className="btnShimmer"></div>
        </div>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="search">
        <div className="searchDiv">
          <input
            type="search"
            placeholder="Search for restaurants"
            className="restaurantNameInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              console.log(searchText);

              const filteredRest = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              {
                setFilteredRestaurants(filteredRest);
              }
            }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="filter">
          <button
            className="filterBtn"
            onClick={() => {
              const filteredListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );

              setListOfRestaurants(filteredListOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
