import React from "react";
import "../styles/Searchpage.css";
import { FaSearch } from "react-icons/fa";

const Searchpage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__container container">
        {/* Search Bar */}
        <div className="searchpage__searchbar--container">
          <h1 className="searchbar__heading">Accent - Search</h1>
          <p className="searchbar__desc">Search for Creators, Posts or Tags</p>
          <div className="searchbar">
            <input
              type="text"
              className="searchbar__input"
              placeholder="Search creators, posts or tags"
            />
            <button className="searchbar__btn">
              <FaSearch />
            </button>
          </div>
        </div>
        {/* Results Section */}
        {/* <div className="searchpage__results">
          {posts.map((post) => {
            return <PostCard />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Searchpage;
