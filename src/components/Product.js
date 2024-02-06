import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Product = () => {
  const params = useParams();
  const { proId } = params;

  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  function handleAddItem() {
    dispatch(addItem(product));
  }

  async function getProduct() {
    const url = await fetch("https://fakestoreapi.com/products");
    const data = await url.json();
    const selectedProduct = data[proId] || {};
    setProduct(selectedProduct);
  }

  useEffect(() => {
    getProduct();
  }, [proId]);

  return (
    <div className="page-margin">
      <div className="grid md:grid-cols-2 m-2" index={proId}>
        <div className="shadow-xl promain-img m-2 p-3">
          <img src={product.image} />
        </div>
        <div className="shadow-md p-3 m-2">
          <p>Product Id : {proId}</p>
          <h1 className="product-title">{product.title}</h1>
          <div className="product-img"></div>
          <div className="info-container">
            <h2>
              Price: <span className="price">{product.price} $</span>
            </h2>
            <h2>
              Rating:{" "}
              <span className="rating">
                {product?.rating?.rate}{" "}
                <i className="text-yellow-400 fa fa-star"></i>
              </span>
            </h2>
          </div>
          <p className="description mb-2">{product.description}</p>
          <div className="flex justify-between ">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-success" onClick={handleAddItem}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
