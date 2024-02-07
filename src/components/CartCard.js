import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
const CartCard = ({ title, image, price, rating, index }) => {
  const [buyAlert, setBuyAlert] = useState(false);
  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(removeItem(index));
  }
  return (
    <div className="shadow-xl m-2 p-3 rounded-md">
      <h1 className="product-title">{title}</h1>
      <div className="product-img">
        <img src={image} />
      </div>
      <div className="info-container">
        <h2>
          Price: <span className="price">{price} $</span>
        </h2>
        <h2>
          Rating:{" "}
          <span className="rating">
            {rating?.rate || "N/A"}{" "}
            <i className="text-yellow-400 fa fa-star"></i>
          </span>
        </h2>
      </div>
      <div className="flex justify-between ">
        <button className="btn btn-primary" onClick={() => setBuyAlert(true)}>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i> Buy Now
        </button>
        <button className="btn btn-danger" onClick={handleRemove}>
          <i className="fa fa-trash" aria-hidden="true"></i> Remove
        </button>
      </div>
      {buyAlert ? (
        <div>
          <p className="text-red-500 font-bold ">
            Login to buy
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
          </p>
          <Link to="/login" className="text-blue-400">
            Go to login page <i class="fa fa-sign-in" aria-hidden="true"></i>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CartCard;
