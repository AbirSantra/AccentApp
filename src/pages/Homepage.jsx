import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="container home__container">
        {/* Profile Section */}
        <div className="home__profile--section">
          <ProfileCard />
        </div>
        {/* Feed Section */}
        <div className="home__feed--section">
          <div className="home__feed--header">
            <h1 className="home__feed--welcomeMsg">
              Welcome <span>User</span>!
            </h1>
            <div className="home__feed--links">
              <a href="/" className="home__feed--link">
                Following
              </a>
              <a href="/" className="home__feed--link">
                Popular
              </a>
              <a href="/" className="home__feed--link">
                Newest
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
