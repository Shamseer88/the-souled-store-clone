import { NavLink } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import "./ProductCard.css";

export default function ProducrCard({ product }) {
  const { _id, name, brand, displayImage, price } = product;
  return (
    <>
      <NavLink>
        <div className="product-card">
          <div className="product-image-div">
            <img
              src={displayImage}
              alt={name}
              width="100%"
              className="product-image"
            />
            <div className="heart-icon">
              <BsSuitHeart />
            </div>
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
