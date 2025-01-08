import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-contain">
        <div className="logo-container">
          {/* <div className="logo">🙏🏻</div> */}
          <img
            className="logo"
            src= {LOGO_URL}
            alt="Namaste Food Logo"
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

export default Header;
