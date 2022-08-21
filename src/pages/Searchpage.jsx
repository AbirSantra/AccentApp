import React from "react";
import "../styles/Searchpage.css";

const Searchpage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__container container">
        {/* Search Bar */}
        <div className="searchpage__searchbar--container">
          <h1 className="searchbar__heading">Accent - Search</h1>
          <p className="searchbar__desc">
            Search for Creators, Posts or Topics
          </p>
        </div>
        {/* Results Section */}
      </div>
    </div>
  );
};

export default Searchpage;
