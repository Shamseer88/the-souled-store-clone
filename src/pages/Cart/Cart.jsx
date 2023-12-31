import React, { useEffect } from "react";
import { useCartContext } from "../../provider/CartProvider";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const {
    cartData,
    cartTotal,
    getCartData,
    deleteAnItemFromCart,
    deleteAllItemsFromCart,
  } = useCartContext();
  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <h3 className="cart-page-h3">Cart Details</h3>
      <div className="cart-item-div">
        {cartData &&
          cartData.map((cartItem) => (
            <div key={cartItem.product._id} className="cart-item-card">
              <div className="cart-item-details">
                <div className="cart-item-img">
                  <NavLink to={`/single-product/${cartItem.product._id}`}>
                    <img
                      src={cartItem.product.displayImage}
                      alt={cartItem.product.name}
                    />
                  </NavLink>
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-info-name">{cartItem.product.name}</p>
                  <p className="cart-item-info-size">Size:{cartItem.size}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <p>Quantity : {cartItem.quantity}</p>
              </div>
              <div className="cart-item-price">
                <p>Price : ₹{cartItem.product.price}</p>
              </div>
              <div className="cart-item-total">
                <p>Total : ₹{cartItem.product.price * cartItem.quantity}</p>
              </div>
              <button
                className="cart-item-delete-btn"
                onClick={() => deleteAnItemFromCart(cartItem.product._id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))}
      </div>
      <div className="cart-total-div">
        <h4>Grand Total : ₹{cartTotal}</h4>
        <div className="cart-totat-buttons-div">
          <NavLink to="/men">
            <button>Continue Shopping</button>
          </NavLink>
          <button
            className="cart-totat-buttons-clear"
            onClick={() => {
              deleteAllItemsFromCart();
            }}
          >
            Clear cart
          </button>
        </div>
      </div>
    </>
  );
}
