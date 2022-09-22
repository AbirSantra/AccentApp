import React from "react";
import "./Profilepage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  getUser,
  getUserFollowers,
  getUserFollowings,
} from "../../api/UserApi";
import { useSelector } from "react-redux";
import userImagePlaceholder from "../../images/user image placeholder.jpg";
import { getUserPosts } from "../../api/PostApi";
import PostCard from "../../components/PostCard/PostCard";
import UserCard from "../../components/UserCard/UserCard";
// import { IoPersonAddSharp } from "react-icons/io5";

const Profilepage = () => {
  // Get the current user from the store
  const currentUser = useSelector((state) => state.auth.authData.user);

  // Get the target user id from params
  const { id } = useParams();

  // To sotore the user details
  const [targetUser, setTargetUser] = useState({
    username: "username",
    firstname: "Firstname",
    lastname: "Lastname",
    followers: [],
    following: [],
  });

  // To store the posts of the user
  const [posts, setPosts] = useState([]);

  // To store the followers of the user
  const [followers, setFollowers] = useState([]);

  // To store the followings of the user
  const [followings, setFollowings] = useState([]);

  // To store the state of the results
  const [results, setResults] = useState("posts");

  // Get the target user details
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(id);
      setTargetUser(userData.data);
      const postData = await getUserPosts(id);
      setPosts(postData.data);
      const followersData = await getUserFollowers(id);
      setFollowers(followersData.data);
      const followingData = await getUserFollowings(id);
      setFollowings(followingData.data);
    };
    fetchUser();
    setResults("posts");
  }, [id]);

  return (
    <div className="profilepage">
      <div className="profile__container container">
        {/* Profile Images Section */}
        <div className="profile--images--section">
          {/* <div className="profile--images--cover--container">
            <img
              src={coverImg}
              alt="profile cover"
              className="profile--images--cover"
            />
          </div> */}
          <img
            src={
              targetUser.profilePhoto
                ? targetUser.profilePhoto
                : userImagePlaceholder
            }
            alt="profile display"
            className="profile--images--photo"
          />
        </div>
        {/* Profile Info Section */}
        <div className="profile--info--section">
          <h1 className="profile--info--name">
            {targetUser.firstname + " " + targetUser.lastname}
          </h1>
          <p className="profile--info--username">@{targetUser.username}</p>
          <p className="profile--info--headline">
            {targetUser.bio ? `${targetUser.bio}` : "No bio added"}
          </p>

          {/* Profile Stats */}
          <div className="profile--stats--section">
            <div className="profile--stat" onClick={() => setResults("posts")}>
              <h2 className="profile--stat--num">{posts.length}</h2>
              <p className="profile--stat--label">Posts</p>
            </div>
            <div
              className="profile--stat"
              onClick={() => setResults("followers")}
            >
              <h2 className="profile--stat--num">{followers.length}</h2>
              <p className="profile--stat--label">Followers</p>
            </div>
            <div
              className="profile--stat"
              onClick={() => setResults("followings")}
            >
              <h2 className="profile--stat--num">{followings.length}</h2>
              <p className="profile--stat--label">Following</p>
            </div>
          </div>

          {/* Buttons */}
          {!currentUser.following.includes(id) && currentUser._id !== id && (
            <div className="profile--actions">
              <button className="primary-btn profile--actions--btn">
                Follow
              </button>
              {/* <button className="secondary-btn profile--actions--btn">
                Message
              </button> */}
            </div>
          )}
        </div>

        {/* Profile Results Section */}
        <div className="profile--results">
          {/* Posts Results */}
          {results === "posts" && (
            <div className="profile--results--posts">
              {posts.map((post) => (
                <PostCard
                  data={post}
                  key={post._id}
                  currentUser={currentUser._id}
                />
              ))}
            </div>
          )}
          {/* Followers Results */}
          {results === "followers" && (
            <div className="profile--results--followers">
              {followers.map((follower) => (
                <UserCard user={follower} key={follower._id} />
              ))}
            </div>
          )}
          {/* Followings Results */}
          {results === "followings" && (
            <div className="profile--results--followings">
              {followings.map((following) => (
                <UserCard user={following} key={following._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
