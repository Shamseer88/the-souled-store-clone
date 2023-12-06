import { useNavigate } from "react-router-dom";
import "../Auth.css";
import { useUser } from "../../../provider/UserProvider";
import { apiUrl, projectId } from "../../../helper/apiDetails";
import { useState } from "react";

export default function SignIn() {
  const { signInContext } = useUser();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(userInfo);
  };

  const signIn = async () => {
    try {
      const response = await fetch(`${apiUrl}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
        },
        body: JSON.stringify({
          ...userInfo,
          appType: "ecommerce",
        }),
      });
      if (response.ok) {
        const data = await response.json();

        const {
          token,
          data: { name },
        } = data;

        sessionStorage.setItem("authToken", token);
        localStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", JSON.stringify(name));
        localStorage.setItem("userInfo", JSON.stringify(name));

        // pass user data to the context
        signInContext(token);

        // Navigate to home
        navigate("/");
      } else {
        console.error("Sign in failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="signin-input">
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={userInfo.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={userInfo.password}
                onChange={handleChange}
              />
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
