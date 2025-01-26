import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  // Normal JS Variable
  // //  let listOfRestaurants = [];
  // listOfRestaurants = resList.map((resList) => {
  //   return resList;
  // });

  if (onlineStatus === false) {
    return <h1>Looks like you are offline! Please check your internet connection</h1>;
  }

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

              setFilteredRestaurants(filteredListOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
