import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

// Local State Variable => Super powerful variable        (Hooks)

const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// Normal JS Variable
// //  let listOfRestaurants = [];
// listOfRestaurants = resList.map((resList) => {
//   return resList;
// });

  return (
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
