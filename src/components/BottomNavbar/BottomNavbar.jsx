import "./BottomNavbar.css";
import { apiUrl, projectId } from "../../helper/apiDetails";
import { useRef, useState } from "react";
import { useEffect } from "react";
import {
  FaBars,
  FaHeart,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";

export default function BottomNavbar() {
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
    console.log(categoryList);
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div className="bottom-navbar">
      <div className="bottom-navbar-left">
        <div className="bottom-navbar-left-menu">
          <ul ref={navRef}>
            {categoryList.map((category) => (
              <li key={category}>{category}</li>
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
        <FaUser size={20} color="#58595b" />
        <div className="bottom-navbar-wishlist">
          <FaHeart size={20} color="#58595b" />
          <span>0</span>
        </div>
        <div className="bottom-navbar-cart">
          <FaShoppingBag size={20} color="#58595b" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
