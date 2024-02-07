import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../logo/logo.png";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    !isActive ? setIsActive(true) : setIsActive(false);
  }
  return (
    <nav className="nav-bar flex justify-between shadow-xl h-16 items-center">
      <div className="logo p-2">
        <img src={logo} alt="Fake Store" />
      </div>
      <div className="right-nav flex justify-between items-center">
        <ul className={isActive ? "flex navlist active" : "flex navlist"}>
          <li className="p-2">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-home px-1" aria-hidden="true"></i> Home
            </Link>
          </li>

          <li className="p-2">
            <Link to={"/login"} className="nav-link">
              <i className="fa fa-user-circle-o px-1" aria-hidden="true"></i>{" "}
              Login
            </Link>
          </li>
          <li className="p-2">
            <Link to={"/register"} className="nav-link">
              <i className="fa fa-sign-in px-1" aria-hidden="true"></i> Register
            </Link>
          </li>
        </ul>
        <div className="p-2">
          <Link to={"/cart"} className="nav-link">
            <i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>
            <span className="cart-items">{cartItems.length}</span>
          </Link>
        </div>
        <div className="hamburger p-2" onClick={handleClick}>
          {isActive ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
