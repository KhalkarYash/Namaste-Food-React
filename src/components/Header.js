import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  // // If no dependency array => useEffect is called on every render
  // useEffect(() => {
  //   console.log("useEffect() called");
  // });

  // // If dependency array is empty = [] => useEffect called only on initial render and just once
  // useEffect(() => {
  //   console.log("useEffect() called");
  // }, []);

  // If dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect() called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-contain">
        <div className="logo-container">
          {/* <div className="logo">🙏🏻</div> */}
          <img className="logo" src={LOGO_URL} alt="Namaste Food Logo" />
        </div>
        <div className="logoName">Namaste Food</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
