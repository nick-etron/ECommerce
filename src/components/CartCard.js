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
          Price: <span className="price">{price}</span>
        </h2>
        <h2>
          Rating: <span className="rating">{rating?.rate || "N/A"}</span>
        </h2>
      </div>
      <div className="flex justify-between ">
        <button className="bg-blue-400 text-white rounded-md p-2">
          Buy Now
        </button>
        <button
          className="bg-red-500 text-white rounded-md p-2"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartCard;
