import { apiUrl, projectId } from "../../helper/apiDetails";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { FaBars, FaHeart, FaShoppingBag, FaTimes } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../provider/UserProvider";

import Profile from "../Profile/Profile";
import "./BottomNavbar.css";
import { useWishList } from "../../provider/WishListProvider";
import { toast } from "react-toastify";
import { useCartContext } from "../../provider/CartProvider";

export default function BottomNavbar({ handleCategory }) {
  const { isUserLoggedIn } = useUser();
  const { wishListNumber } = useWishList();
  const { cartNumber } = useCartContext();

  const navigate = useNavigate();
  const currentLocation = useLocation().pathname;

  const currentGender = "/" + currentLocation.split("/")[1];

  const [categoryList, setCategoryList] = useState([]);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("bottom-navbar-responsive");
  };
  const getCategoryList = async () => {
    const response = await fetch(`${apiUrl}ecommerce/clothes/categories`, {
      headers: {
        projectId: projectId,
      },
    });
    const jsonData = await response.json();
    setCategoryList(jsonData.data);
  };
  useEffect(() => {
    getCategoryList();
  }, [wishListNumber]);

  return (
    <div className="bottom-navbar">
      <div className="bottom-navbar-left">
        <div className="bottom-navbar-left-menu">
          <ul ref={navRef}>
            {categoryList.map((category) => (
              <li key={category}>
                <NavLink
                  to={`${currentGender}/${category}`}
                  onClick={() => {
                    handleCategory(category);
                    showNavbar();
                  }}
                >
                  {category}
                </NavLink>
              </li>
            ))}
            <button
              onClick={showNavbar}
              className="bottom-navbar-btn close-btn"
            >
              <FaTimes size={20} />
            </button>
          </ul>
          <button onClick={showNavbar} className="bottom-navbar-btn">
            <FaBars size={20} />
          </button>
        </div>
      </div>
      <div className="bottom-navbar-right">
        <Profile />
        <NavLink to={isUserLoggedIn ? "/wishlist" : "/sign-in"}>
          <div className="bottom-navbar-wishlist">
            <FaHeart
              size={20}
              color="#58595b"
              onClick={() => {
                !isUserLoggedIn &&
                  toast("Sign in / Register to handle wishlist!");
              }}
            />
            <span>{wishListNumber}</span>
          </div>
        </NavLink>
        <NavLink to={isUserLoggedIn ? "/cart" : "/sign-in"}>
          <div className="bottom-navbar-cart">
            <FaShoppingBag size={20} color="#58595b" />
            <span>{cartNumber}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
