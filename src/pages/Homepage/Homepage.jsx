import React from "react";
import FollowingsCard from "../../components/FollowingsCard/FollowingsCard";
import PostCard from "../../components/PostCard/PostCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./Homepage.css";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Homepage = () => {
  return (
    <div className="home">
      <div className="container home__container">
        {/* Profile Section */}
        <div className="home__profile--section">
          <ProfileCard />
          <FollowingsCard />
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
          <div className="home__feed--posts">
            {posts.map((post) => {
              return <PostCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
