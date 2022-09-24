import React from "react";
import "./Navbar.css";
import accentLogo from "../../images/accent text logo.png";
// import profileImg from "../../images/profile1.jpg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  // FaBookmark,
  FaSearch,
  FaUser,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserImagePlaceholder from "../../images/user image placeholder.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Getting the user info from the global state
  const user = useSelector((state) => state.auth.authData);

  // To store the dropdown state
  const [dropdown, setDropdown] = useState(false);

  // Function to toggle dropdown state
  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  // Function to Logout User
  const handleLogOut = () => {
    dispatch(logOut());
  };

  // Function to redirect to settings page
  const handleSettings = (e) => {
    e.preventDefault();
    navigate(`profile/${user.user._id}`);
  };

  // Function to direct to UploadPost page
  const handleNewPost = (e) => {
    e.preventDefault();
    navigate("../upload");
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
            <Link to="/saved" className="navbar__navlink">
              <FaStar size={26} />
              <span className="tooltipcard">
                <p className="tooltiptext">Saved</p>
              </span>
            </Link>

            {/* <Link to="/marketplace" className="navbar__navlink">
              <FaShoppingBag />
              <span className="tooltipcard">
                <p className="tooltiptext">Marketplace</p>
              </span>
            </Link> */}
            <Link to={`/profile/${user.user._id}`} className="navbar__navlink">
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
            <div className="navbar__profile--icon" onClick={handleDropdown}>
              <img
                src={
                  user.user.profilePhoto
                    ? user.user.profilePhoto
                    : UserImagePlaceholder
                }
                alt="profile"
              />
              {dropdown && (
                <div className="navbar__profile--dropdown">
                  <button
                    className="navbar__profile--option"
                    onClick={handleSettings}
                  >
                    <AiFillSetting /> Settings
                  </button>
                  <button
                    className="navbar__profile--option"
                    onClick={handleLogOut}
                  >
                    <MdLogout size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
            <button
              className="primary-btn navbar__uploadbtn"
              onClick={handleNewPost}
            >
              <FaPlus /> New Post
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
