import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./restaurants";

/*
 *  Header
 *  - Logo
 *  - Nav Items
 *  Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Cards
 *      - Img
 *      - Name
 *      - Cuisine
 *      - Star
 *      - Time to deliver
 *      - Price for 2
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 *
 *
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-contain">
        <div className="logo-container">
          {/* <div className="logo">🙏🏻</div> */}
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8VwBrHSUVmPlRsqt9qibUCE26vZlIUvlw&s"
            alt = "Namaste Food Logo"
          />
        </div>
        <div className="logoName">Namaste Food</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime
  } = resData?.
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            cloudinaryImageId
          }
          alt={name}
        />
        <h3 className="resName">{name}</h3>
        <h4 className="resData" id="resDataCuisines">{cuisines.join(", ")}</h4>
        <div className="resDataContainer">
          <h4 className="resData">{avgRating} ⭐</h4>
          <h4 className="resData">|</h4>
          <h4 className="resData">{costForTwo}</h4>
          <h4 className="resData">|</h4>
          <h4 className="resData">{deliveryTime + " mins"}</h4>
        </div>
      </div>
    );
};

const Search = () => {
  return (
    <div></div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"><Search /></div>
      <div className="restaurant-container">
        {
          restaurants.map((restaurant)=>{
            <RestaurantCard resData = {restaurant}/>
          })
        }
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
