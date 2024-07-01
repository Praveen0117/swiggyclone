import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice"


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);



  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const total = cartItems.reduce((acc, item) => acc + (item.card.info.price || item.defaultPrice )/ 100, 0);
  const deliveryCharge = 33;
  const gstCharges = 55.6;

  const renderBillDetails = () => {
    return (
      <div className="flex p-5 flex-col bg-[#e9ecee] w-[100%] ">
        <p className="font-bold">Bill Details</p>
        <div className="flex  justify-between">
          Item Total<span>₹{total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          Delivery Fee <span>₹{deliveryCharge}</span>
        </div>
        <div className="flex justify-between">
          GST and Restaurant Charges <span>₹{gstCharges}</span>
        </div>
        <hr className="border border-2px my-2 border-black" />
        <div className="flex font-bold justify-between">
          TO PAY<span>₹{(total + deliveryCharge + gstCharges).toFixed(2)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-items-center w-6/12 items-center m-4  p-4 ">
      <h1 className="font-serif font-bold text-base m-5 mt-0">Cart Items</h1>
    <div className="">
      {renderBillDetails()}
      <button className="p-2 mt-5 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length == 0 && <h1>Cart is Empty Add Items to the Cart</h1>}
      <div className="m-auto ">
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 h-auto border-black text-left flex justify-between"
          >
            <div className=" mr-10 w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
                className="rounded-r-lg w-28 h-28 mx-24 my-4"
              />
              
            </div>
          </div>
        ))}
      </div>
      
        </div>
    </div>
  );
};
export default Cart;
