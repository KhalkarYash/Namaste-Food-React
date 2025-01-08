import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt={name}
      />
      <h3 className="resName">{name}</h3>
      <h4 className="resData" id="resDataCuisines">
        {cuisines.join(", ")}
      </h4>
      <div className="resDataContainer">
        <h4 className="resData">{avgRating} ⭐</h4>
        <h4 className="resData">|</h4>
        <h4 className="resData">{costForTwo}</h4>
        <h4 className="resData">|</h4>
        <h4 className="resData">{sla.deliveryTime + " mins"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
