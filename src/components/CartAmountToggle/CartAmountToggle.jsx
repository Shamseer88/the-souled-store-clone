import { FaMinus, FaPlus } from "react-icons/fa";
import "./CartAmountToggle.css";
import { NavLink } from "react-router-dom";

export default function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div>
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
      <NavLink to="/cart">
        <button className="addtocart-btn">add to cart</button>
      </NavLink>
    </div>
  );
}
