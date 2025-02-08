import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { itemImageURL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const dummy = "Dummy Data"

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="font-bold flex flex-col justify-evenly items-center text-[0.9rem]">
      <div>
        <h1 className="text-[2rem]">{name}</h1>
      </div>
      <div className="rounded-b-[20px] w-[50vw] p-4 bg-gradient-to-b from-white via-gray-100 to-gray-300">
        <div className="p-4 bg-white h-full rounded-[10px]">
          <div>
            {avgRatingString + " (" + totalRatingsString + ") "} ●{" "}
            {costForTwoMessage}
          </div>
          <div>{cuisines.join(", ")}</div>
          <div>
            <div>{areaName}</div>
            <div>{sla.slaString}</div>
          </div>
        </div>
      </div>
      <div className="w-[50vw]">
        <h2 className="text-center text-[1.5rem] m-4">Menu</h2>
        <ul>
          <div className="h-[2vh] w-full bg-gray-100"></div>
          {itemCards.map((item, index) => {
            return (
              <li
                className="border-b-1 border-gray-200"
                key={item?.card?.info?.id}
              >
                <div className="flex justify-between my-10 w-[90%] m-auto">
                  <div className="p-5">
                    <div className="text-[1rem]">{item?.card?.info?.name}</div>
                    <div>
                      ₹{" "}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-gray-400 font-normal">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                  <div>
                    <img
                      className="rounded-2xl w-[200px]"
                      src={itemImageURL + item?.card?.info?.imageId}
                    ></img>
                  </div>
                  <hr />
                </div>
              </li>
            );
          })}
          <div className="h-[2vh] w-full bg-gray-100"></div>
        </ul>
      </div>

      {/* Categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={(index===showIndex)&& true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
