import { useNavigate } from "react-router-dom";
import "../Auth.css";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signin-container">
        <div className="signin-card">
          <h2>Login with the souled store</h2>
          <div className="signin-btns">
            <button
              onClick={() => navigate("/sign-in")}
              className="active-login-btn"
              disabled
            >
              LOGIN
            </button>
            <button onClick={() => navigate("/sign-up")} className="login-btn">
              REGISTER
            </button>
          </div>
          <form>
            <div className="signin-input">
              <input type="text" placeholder="Email" name="email" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit" className="proceed-btn">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
      );
    </div>
  );
}
