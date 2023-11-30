import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiUrl, projectId } from "../../../helper/apiDetails";
import "../Auth.css";
import { useUser } from "../../../provider/UserProvider";

export default function SignUp() {
  const { signInContext } = useUser();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(userInfo);
  };

  const signUp = async () => {
    try {
      const response = await fetch(`${apiUrl}user/signup`, {
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
        console.log(data);

        const {
          token,
          data: { name },
        } = data;

        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", JSON.stringify(name));

        // pass user data to the context
        signInContext(token);

        // Navigate to home
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Register with the souled store</h2>
        <div className="signin-btns">
          <button onClick={() => navigate("/sign-in")} className="login-btn">
            LOGIN
          </button>
          <button className="active-login-btn" disabled>
            REGISTER
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signin-input">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={userInfo.name}
              onChange={handleChange}
            />
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
            <button
              type="submit"
              className="register-btn"
              onClick={() => navigate("/")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
