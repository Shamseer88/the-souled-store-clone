import { FaUser } from "react-icons/fa";
import { useUser } from "../../provider/UserProvider";
import { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { signInContext, isUserLoggedIn } = useUser();
  let loginUserName = sessionStorage.getItem("userInfo");

  const formatUserName = (userName) => {
    const sanitizedUserName = userName.replace(/^"|"$/g, "");
    const formattedUserName =
      sanitizedUserName.charAt(0).toUpperCase() + sanitizedUserName.slice(1);
    return formattedUserName;
  };

  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    signInContext();
    navigate("/sign-in");
  };
  return (
    <div className="profile-div" onClick={() => setShowModal(!showModal)}>
      <FaUser size={20} color="#58595b" className="bottom-navbar-user" />
      <p className="profile-name">
        {isUserLoggedIn ? formatUserName(loginUserName) : ""}
      </p>
      {showModal && (
        <section className="auth-modal">
          {isUserLoggedIn ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={() => navigate("/sign-in")}>Sign In</button>
          )}
        </section>
      )}
    </div>
  );
}
