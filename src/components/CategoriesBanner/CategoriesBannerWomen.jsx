import { NavLink } from "react-router-dom";
import "./CategoriesBanner.css";

export default function CategoriesBannerWomen() {
  return (
    <div className="categories-banner">
      <h3>Categories</h3>
      <div className="categories-images">
        <div className="categories-shirt">
          <NavLink to="/women/shirt">
            <img src="/w-shirt.png" alt="Shirt" />
            <h4 className="categories-banner-name">SHIRT</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/women/jumpsuit">
            <img src="/w-jumpsuit.png" alt="jumpsuit" />
            <h4 className="categories-banner-name">JUMPSUIT</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/women/jeans">
            <img src="/w-jeans.png" alt="Jeanst" />
            <h4 className="categories-banner-name">JEANS</h4>
          </NavLink>
        </div>
        <div className="categories-shirt">
          <NavLink to="/women/kurti">
            <img src="/w-kurti.png" alt="Kurti" />
            <h4 className="categories-banner-name">KURTI</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
