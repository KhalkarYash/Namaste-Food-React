import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { itemImageURL } from "../utils/constants";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {console.log(itemCards)}
        {itemCards.map((item, index) => {
          return (
            <div key={item?.card?.info?.id}>
              <div>
                <li>
                  {item?.card?.info?.name} - ₹
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </li>
              </div>
              <div>
                <img src={itemImageURL + item?.card?.info?.imageId}></img>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
