import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  var color;
  if (avgRating>=4){
    color = "green";
  } else if(avgRating>3 && avgRating<4) {
    color = "orange";
  } else {
    color = "red";
  }
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
  {Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available"}
</h4>
      <div className="resDataContainer">
        <div className="ratingColor" style={{backgroundColor:color}}>
          <h4 className="resData ratingBG">{avgRating} <i class="fa-solid fa-star"></i></h4>
        </div>
        <h4 className="resData">|</h4>
        <h4 className="resData">{costForTwo}</h4>
        <h4 className="resData">|</h4>
        <h4 className="resData">{sla?.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
