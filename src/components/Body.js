import RestaurantCard, { withMoreRating } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable => Super powerful variable        (Hooks)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withMoreRating(RestaurantCard);

  useEffect(() => {
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
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <div>
      <div className="flex justify-center items-center align-middle mt-[1rem]">
        <div className="w-[40vw] h-[6vh] bg-gray-200"></div>
        <div className="m-[10px] w-[10vw] h-[5vh]">
          <div className="p-[5px] m-[10px] w-[15vw] h-[4vh] bg-gray-200"></div>
        </div>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-4 shadow-md">
          <input
            type="search"
            placeholder="Search for restaurants"
            className="w-[40vw] text-[1rem] py-1 px-10 h-full focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 cursor-pointer"
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
            Search
          </button>
        </div>
        <div className="p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 cursor-pointer shadow-blue-200 shadow-md"
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

      <div className="flex flex-wrap justify-center align-middle p-[10px]">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
