import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, } = useContext(StoreContext);

  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    return acc + item.price * cartItems[item._id];
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>₹{deliveryFee}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{total}</b>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
9
        <div className="cart-promocode">
          <p>If you have a promocode, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promocode" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
