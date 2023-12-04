import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./AddToCart.css";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";

export default function AddToCart({ product }) {
  const { size = [""] } = product;
  const [selectedSize, setSelectedSize] = useState(size[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <>
      <div className="single-product-size">
        <p>Please select a size:</p>
        <div className="single-product-size-btns">
          {size.map((siz, index) => (
            <button
              key={index}
              className={
                selectedSize === siz ? "selected-size-btn" : "product-size-btns"
              }
              onClick={() => setSelectedSize(siz)}
            >
              {selectedSize === siz ? <FaCheck /> : siz}
            </button>
          ))}
          {selectedSize && <span>Selected size : {selectedSize}</span>}
        </div>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        product={product}
      />
    </>
  );
}
