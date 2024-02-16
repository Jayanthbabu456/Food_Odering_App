import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const shortdesc = (word, maxLength) => {
    if (word && word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word;
  };
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5  min-h-[540px] flex flex-col gap-[30px] items-center">
      <p className="text-[30px] font-Montserrat font-bold text-orange-500">
        Cart Items
      </p>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, key) => (
          <div
            key={item?.card?.info?.id}
            className="flex flex-row justify-between items-center w-[65%] mx-auto  h-[120px] bg-orange-200 px-[20px] rounded-lg shadow-lg cursor-pointer"
          >
            <div className="font-Montserrat">
              <p className="text-[18px] font-semibold">
                {item?.card?.info?.name}
              </p>
              <p className="text-[16px] font-medium">
                ₹{item?.card?.info?.price / 100}
              </p>
              <div className=" mt-[20px]">
                <p className="font-Montserrat text-[16px] font-medium">
                  {shortdesc(item?.card?.info?.description, 50)}
                </p>
              </div>
            </div>
            <div className="w-[120px] h-[100px] relative">
              <img
                src={
                  item?.card?.info?.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`
                    : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kew4g6ryhoznenaqwzyi"
                }
                alt={item?.name}
                className="w-[100%] h-[100%] rounded-lg cursor-pointer object-cover"
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-[30px] font-Montserrat font-medium text-orange-500 h-[300px]  flex justify-center items-center">
          Your cart is empty. Add items to your cart!
        </p>
      )}
      <button
        className="text-[18px] font-Montserrat font-bold bg-orange-200 cursor-pointer  shadow-lg px-[10px] py-[8px] rounded-md outline-none"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
