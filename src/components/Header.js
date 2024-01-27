import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <nav className=" flex justify-between shadow-lg h-16 items-center">
      <div className="logo p-2">
        <h2>Logo</h2>
      </div>
      <ul className="flex ">
        <li className="p-2">
          <Link to={"/"} element={<Home />} className="nav-link">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="p-2">
          <Link to={"/product"} element={<Product />} className="nav-link">
            Product
          </Link>
        </li>
        <li className="p-2">
          <Link to={"/cart"} element={<Cart />} className="nav-link">
            Cart <span className="cart-items">{cartItems.length}</span>
          </Link>
          {console.log(cartItems)}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
