import "./NoProductMessage.css";
import { NavLink } from "react-router-dom";

export default function NoProductMessage() {
  return (
    <div className="no-product-message">
      <h1>No products to display!</h1>
      <NavLink to="/men">
        <button className="continue-shopping">Continue Shopping</button>
      </NavLink>
    </div>
  );
}
