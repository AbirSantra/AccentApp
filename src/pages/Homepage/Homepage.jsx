import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowingsCard from "../../components/FollowingsCard/FollowingsCard";
import PostCard from "../../components/PostCard/PostCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {
  getFollowingPosts,
  getNewestPosts,
  getPopularPosts,
} from "../../redux/PostSlice";
import "./Homepage.css";

const Homepage = () => {
  const dispatch = useDispatch();

  // Get the user details from redux
  const { user } = useSelector((state) => state.auth.authData);

  // Get posts, loading and error states from store
  const { postData, postsLoading, postsLoadingError } = useSelector(
    (state) => state.post
  );

  // To store the timeline type
  const [timelineType, setTimelineType] = useState("following");

  // To populate the posts on page load
  useEffect(() => {
    if (timelineType === "following") {
      dispatch(getFollowingPosts(user._id));
    } else if (timelineType === "popular") {
      dispatch(getPopularPosts());
    } else if (timelineType === "newest") {
      dispatch(getNewestPosts());
    }
  }, [timelineType]);

  return (
    <div className="home">
      <div className="container home__container">
        {/* Profile Section */}
        <div className="home__profile--section">
          <ProfileCard userData={user} />
          <FollowingsCard userData={user.following} />
        </div>
        {/* Feed Section */}
        <div className="home__feed--section">
          <div className="home__feed--header">
            <h1 className="home__feed--welcomeMsg">
              Welcome <span>{user.username}</span>!
            </h1>
            <div className="home__feed--links">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTimelineType("following");
                }}
                className={
                  timelineType === "following"
                    ? "home__feed--link home__feed--link--active"
                    : "home__feed--link"
                }
              >
                Following
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTimelineType("popular");
                }}
                className={
                  timelineType === "popular"
                    ? "home__feed--link home__feed--link--active"
                    : "home__feed--link"
                }
              >
                Popular
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTimelineType("newest");
                }}
                className={
                  timelineType === "newest"
                    ? "home__feed--link home__feed--link--active"
                    : "home__feed--link"
                }
              >
                Newest
              </button>
            </div>
          </div>
          {postsLoading ? (
            postsLoadingError ? (
              <p>{postsLoadingError}</p>
            ) : (
              <p>Loading</p>
            )
          ) : (
            <div className="home__feed--posts">
              {postData.map((post) => {
                return <PostCard data={post} key={post._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
