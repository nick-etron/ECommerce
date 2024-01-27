import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculateTotal = cartItems.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotal(calculateTotal);
  }, [cartItems]);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-2">
          <div className="grid md:grid-cols-3">
            {cartItems.map((item, index) => (
              <CartCard {...item} key={index} index={index} />
            ))}
          </div>
          <div className="shadow-lg rounded-md m-2">
            <div className="flex justify-between shadow bg-blue-400 text-white font-bold p-3 mb-2">
              <p>Product Name</p>
              <p>Price</p>
            </div>
            {cartItems.map((item) => (
              <div className="flex justify-between px-3 py-2 ">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <div className="flex justify-between p-3 bg-blue-300 text-white font-bold">
              <p>Total :</p>
              <p>{total}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-500 text-white m-2 rounded-md">
          <p className="font-bold p-3 ">No Products in the cart</p>
        </div>
      )}
    </>
  );
};
export default Cart;
