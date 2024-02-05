import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    !isActive ? setIsActive(true) : setIsActive(false);
  }
  return (
    <nav className="bg-blue-300 text-white flex justify-between shadow-lg h-16 items-center">
      <div className="logo p-2">
        <h2>Logo</h2>
      </div>
      <div className="right-nav flex justify-between items-center">
        <ul className={isActive ? "flex navlist active" : "flex navlist"}>
          <li className="p-2">
            <i className="fa fa-home px-1" aria-hidden="true"></i>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="p-2">
            <i className="fa fa-shopping-bag px-1" aria-hidden="true"></i>
            <Link to={"/product"} className="nav-link">
              Product
            </Link>
          </li>
          <li className="p-2">
            <i className="fa fa-shopping-cart px-1" aria-hidden="true"></i>
            <Link to={"/cart"} className="nav-link">
              Cart <span className="cart-items">{cartItems.length}</span>
            </Link>
            {console.log(cartItems)}
          </li>
          <li className="p-2">
            <i className="fa fa-shopping-bag px-1" aria-hidden="true"></i>
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="p-2">
            <i className="fa fa-shopping-bag px-1" aria-hidden="true"></i>
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>
        </ul>

        <div className="hamburger p-2" onClick={handleClick}>
          {isActive ? (
            <i class="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
