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
          <div className="logo">🙏🏻</div>
          {/* <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"/> */}
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

const RestaurantCard = () => {
  const allRestaurants = restaurants.map((value, index) => {
    return (
      <div className="res-card">
        <img className="res-logo" src={value.url} alt={value.name} />
        <h3>{value.name}</h3>
        <h4>{value.cuisine}</h4>
        <h4>{value.rating} stars</h4>
        <h4>{value.distance}</h4>
      </div>
    );
  });

  return <div className="restaurant-container">{allRestaurants}</div>;
  // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
};

const RestaurantCard2 = (props) => {
    return (
      <div className="res-card">
        <img className="res-logo" src={props.url} alt={props.resName} />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h4>{props.distance}</h4>
      </div>
    );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard2 
          url="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"
          resName = "Yash"
          cuisine = "Indian"
          rating = "5"
          distance = "1.5"
        />
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
