import React from "react";
import "../styles/Navbar.css";
import accentLogo from "../images/accent text logo.png";
import profileImg from "../images/profile1.jpg";
import { AiFillHome } from "react-icons/ai";
import {
  FaBookmark,
  FaSearch,
  FaUser,
  FaPlus,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        {/* Left Logo Section */}
        <a href="/" className="navbar__logo">
          <img src={accentLogo} alt="accent-logo" />
        </a>

        {/* Middle Navlinks Section */}
        <div className="navbar__navlinks">
          <a href="/" className="navbar__navlink">
            <AiFillHome size={28} />
            <span className="tooltipcard">
              <p className="tooltiptext">Home</p>
            </span>
          </a>
          <a href="/" className="navbar__navlink">
            <FaSearch />
            <span className="tooltipcard">
              <p className="tooltiptext">Search</p>
            </span>
          </a>
          <a href="/" className="navbar__navlink">
            <FaBookmark />
            <span className="tooltipcard">
              <p className="tooltiptext">Saves</p>
            </span>
          </a>

          <a href="/" className="navbar__navlink">
            <FaShoppingBag />
            <span className="tooltipcard">
              <p className="tooltiptext">Marketplace</p>
            </span>
          </a>
          <a href="/" className="navbar__navlink">
            <FaUser />
            <span className="tooltipcard">
              <p className="tooltiptext">Account</p>
            </span>
          </a>
        </div>

        {/* Right Profile Section */}
        <div className="navbar__profile">
          <div className="navbar__profile--icon">
            <img src={profileImg} alt="profile" />
          </div>
          <button className="primary-btn navbar__uploadbtn">
            <FaPlus /> New Post
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
