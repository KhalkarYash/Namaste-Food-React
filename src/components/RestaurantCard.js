import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);
  // console.log(resData)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  var color;
  if (avgRating >= 4) {
    color = "green";
  } else if (avgRating > 3 && avgRating < 4) {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <div className="m-4 w-[250px] h-[273px] bg-[#f0f0f050] shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all text-center rounded-xl overflow-hidden">
      <img
        className="res-logo w-full h-[70%]"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="w-[100%] text-[1rem] font-bold">{name}</h3>
      <h4 className="text-[0.7rem]" id="resDataCuisines">
        {Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "No cuisines available"}
      </h4>
      <div className="flex justify-evenly 1rem">
        <div
          className="text-white font-light px-[2px] rounded-md items-center text-[0.7rem]"
          style={{ backgroundColor: color }}
        >
          <h4>
            {avgRating} <i class="fa-solid fa-star"></i>
          </h4>
        </div>
        <h4 className="text-[0.7rem]">|</h4>
        <h4 className="text-[0.7rem]">{costForTwo}</h4>
        <h4 className="text-[0.7rem]">|</h4>
        <h4 className="text-[0.7rem]">{sla?.slaString}</h4>
      </div>
      <h4 className="text-[0.7rem]">User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// if rating > 4.5 it will be promoted/recommended

export const withMoreRating = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-[5px] z-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
