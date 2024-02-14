import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ title, image, price, rating, description, index }) => {
  const [addAlert, setAddAlert] = useState(false);
  const dispatch = useDispatch();
  function handleAddItem(item) {
    const cartItem = {
      title,
      image,
      price,
      rating,
      description,
    };
    dispatch(addItem(cartItem));
    setAddAlert(true);
  }
  return (
    <div className="product-card shadow-xl ">
      <Link to={"/product/" + index}>
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
              {rating.rate} <i className="text-yellow-400 fa fa-star"></i>
            </span>
          </h2>
        </div>
        <p className="description mb-2">{description}</p>
      </Link>
      <div className="flex justify-between items-center">
        <button onClick={handleAddItem} className="btn btn-success ">
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to
          Cart
        </button>
        {addAlert ? (
          <p className="text-green-400 font-bold ">
            Item Added <i class="fa fa-check-circle" aria-hidden="true"></i>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ProductCard;
