import React from "react";
import "./Navbar.css";
import accentLogo from "../../images/accent text logo.png";
import profileImg from "../../images/profile1.jpg";
import { AiFillHome } from "react-icons/ai";
import {
  // FaBookmark,
  FaSearch,
  FaUser,
  FaPlus,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../pages/Authpage/AuthSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  // Getting the user info from the global state
  const user = useSelector((state) => state.auth.authData);

  // Function to Logout User
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        {/* Left Logo Section */}
        <Link to="/" className="navbar__logo">
          <img src={accentLogo} alt="accent-logo" />
        </Link>

        {/* Middle Navlinks Section. Renders only when user is logged in */}
        {user && (
          <div className="navbar__navlinks">
            <Link to="/home" className="navbar__navlink">
              <AiFillHome size={28} />
              <span className="tooltipcard">
                <p className="tooltiptext">Home</p>
              </span>
            </Link>
            <Link to="/search" className="navbar__navlink">
              <FaSearch />
              <span className="tooltipcard">
                <p className="tooltiptext">Search</p>
              </span>
            </Link>
            <Link to="/save" className="navbar__navlink">
              <FaStar size={26} />
              <span className="tooltipcard">
                <p className="tooltiptext">Saves</p>
              </span>
            </Link>

            <Link to="/marketplace" className="navbar__navlink">
              <FaShoppingBag />
              <span className="tooltipcard">
                <p className="tooltiptext">Marketplace</p>
              </span>
            </Link>
            <Link to="/profile" className="navbar__navlink">
              <FaUser />
              <span className="tooltipcard">
                <p className="tooltiptext">Profile</p>
              </span>
            </Link>
          </div>
        )}

        {/* Right Profile Section. Renders only when user if logged in */}
        {user && (
          <div className="navbar__profile">
            <div className="navbar__profile--icon" onClick={handleLogOut}>
              <img src={profileImg} alt="profile" />
            </div>
            <button className="primary-btn navbar__uploadbtn">
              <FaPlus /> New Post
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
