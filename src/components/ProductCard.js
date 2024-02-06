import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, price, rating, description, index }) => {
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
      <button onClick={handleAddItem} className="btn btn-success ">
        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
