import React, { useEffect, useState } from "react";
import { useWishList } from "../../provider/WishListProvider";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import "./WishList.css";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { NavLink } from "react-router-dom";

export default function Wishlist() {
  const {
    wishList,
    getWishListItems,
    deleteAnItemFromWishList,
    deleteAllItemsFromWishList,
  } = useWishList();
  const loginUserName = JSON.parse(localStorage.getItem("userInfo")) || "";

  const formatUserName = (userName) => {
    const sanitizedUserName = userName.replace(/^"|"$/g, "");
    const formattedUserName =
      sanitizedUserName.charAt(0).toUpperCase() + sanitizedUserName.slice(1);
    return formattedUserName;
  };
  console.log("WishList from context", wishList);
  useEffect(() => {
    getWishListItems();
  }, [wishList]);
  return (
    <>
      <h3 className="wishlist-h3">
        {wishList
          ? `${formatUserName(loginUserName)}'s Wishlist`
          : `Your wishlist is empty`}
      </h3>

      <div className="wish-list-div">
        {wishList.map((item) => (
          <>
            <div className="wishlist-card" key={item.products.id}>
              <img src={item.products.displayImage} alt={item.products.name} />
              <div className="wishlist-item-info">
                <p>{item.products.name}</p>
                <h5>₹{item.products.price}</h5>
              </div>
              <div className="wishlist-buttons-div">
                <NavLink to={`/single-product/${item.products._id}`}>
                  <button className="wishlist-cart">
                    <FaShoppingCart size={15} />
                    Add to cart
                  </button>
                </NavLink>

                <button
                  className="wishlist-delete"
                  onClick={() => deleteAnItemFromWishList(item.products._id)}
                >
                  <FaTrash size={15} />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="wishlist-clear-button">
        {wishList ? (
          <button onClick={() => deleteAllItemsFromWishList()}>
            <FaTrash />
            Clear All
          </button>
        ) : (
          <button>Continue shopping</button>
        )}
      </div>
    </>
  );
}
