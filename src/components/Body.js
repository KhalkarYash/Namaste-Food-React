import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
