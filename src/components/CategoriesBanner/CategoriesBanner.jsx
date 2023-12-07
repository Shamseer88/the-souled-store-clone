import { NavLink } from "react-router-dom";
import "./CategoriesBanner.css";

export default function CategoriesBanner() {
  return (
    <div className="categories-banner">
      <h3>Categories</h3>
      <div className="categories-images">
        <div className="categories-shirt">
          <NavLink to="/men/shirt">
            <img src="/shirt.png" alt="Shirt" />
            <h4 className="categories-banner-name">SHIRT</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/tshirt">
            <img src="/tshirt.png" alt="T-Shirt" />
            <h4 className="categories-banner-name">T-SHIRT</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/jeans">
            <img src="/jeans.png" alt="Jeanst" />
            <h4 className="categories-banner-name">JEANS</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/hoodie">
            <img src="/hoodie.png" alt="Hoodie" />
            <h4 className="categories-banner-name">HOODIE</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/kurta">
            <img src="/kurta.png" alt="Kurta" />
            <h4 className="categories-banner-name">KURTA</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/jogger">
            <img src="/jogger.png" alt="Jogger" />
            <h4 className="categories-banner-name">JOGGER</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/shorts">
            <img src="/short.png" alt="Short" />
            <h4 className="categories-banner-name">SH0RTS</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/men/sweater">
            <img src="/sweater.png" alt="Sweater" />
            <h4 className="categories-banner-name">SWEATER</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
