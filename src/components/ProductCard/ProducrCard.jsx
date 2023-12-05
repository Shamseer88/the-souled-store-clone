import { NavLink } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import "./ProductCard.css";
import { useState } from "react";

export default function ProducrCard({ product }) {
  const { _id, name, brand, displayImage, price } = product;
  return (
    <>
      <NavLink to={`/single-product/${_id}`}>
        <div className="product-card">
          <div className="product-image-div">
            <img
              src={displayImage}
              alt={name}
              width="100%"
              className="product-image"
            />
            {/* <div className="heart-icon" onClick={() => handleWishListIcon(_id)}>
              {productId ? (
                <BsSuitHeart color="#e11b23" />
              ) : (
                <BsSuitHeartFill color="#e11b23" />
              )}
            </div> */}
          </div>

          <div className="product-brand-div">
            <p>Brand : {brand}</p>
          </div>
          <p className="product-name">{name}</p>
          <h5 className="product-price">₹{price}</h5>
        </div>
      </NavLink>
    </>
  );
}

// to={`/single-product/${_id}`}
