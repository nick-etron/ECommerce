import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartCard = ({ title, image, price, rating, index }) => {
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
            {rating?.rate || "N/A"} <i className="text-yellow-400 fa fa-star"></i>
          </span>
        </h2>
      </div>
      <div className="flex justify-between ">
        <button className="btn btn-primary">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i> Buy Now
        </button>
        <button className="btn btn-danger" onClick={handleRemove}>
          <i className="fa fa-trash" aria-hidden="true"></i> Remove
        </button>
      </div>
    </div>
  );
};
export default CartCard;
