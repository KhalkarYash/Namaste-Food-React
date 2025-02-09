import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  // // If no dependency array => useEffect is called on every render
  // useEffect(() => {
  //   console.log("useEffect() called");
  // });

  // // If dependency array is empty = [] => useEffect called only on initial render and just once
  // useEffect(() => {
  //   console.log("useEffect() called");
  // }, []);

  // // If dependency array is [btnNameReact] => called everytime btnNameReact is updated
  // useEffect(() => {
  //   console.log("useEffect() called");
  // }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 p-1 sm:bg-yellow-100 lg:bg-green-100">
      <div className="flex justify-between items-center p-4">
        <div className="w-[4rem] h-min rounded-full overflow-hidden">
          {/* <div className="logo">🙏🏻</div> */}
          <img className="w-full" src={LOGO_URL} alt="Namaste Food Logo" />
        </div>
        <div className="text-[2.5rem]">Namaste Food</div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 list-none justify-center align-middle">
          <li className="px-4 text-xl">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <Link to="/">
            <li className="px-4 text-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 text-xl">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 text-xl">Contact</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4 text-xl">Grocery</li>
          </Link>
          <li className="px-4 text-xl">
            <button
              className="cursor-pointer rounded-[10px] px-[10px]"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 text-xl">{loggedInUser}</li>
          <Link to="/cart">
            <li className="px-4 text-xl">
              <div className="relative">
                <i class="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 && (
                  <span className="rounded-[50%] absolute px-1 py-0.5 bg-red-600 text-white text-[0.5rem]">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
