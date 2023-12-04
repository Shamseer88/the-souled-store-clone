import { FaMinus, FaPlus } from "react-icons/fa";
import "./CartAmountToggle.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../provider/UserProvider";
import { useCartContext } from "../../provider/CartProvider";

export default function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  const { isUserLoggedIn } = useUser();
  const { addToCart } = useCartContext();
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
      <NavLink to={isUserLoggedIn ? "/cart" : "/sign-in"}>
        <button className="addtocart-btn" onClick={() => addToCart(_id)}>
          add to cart
        </button>
      </NavLink>
    </div>
  );
}
