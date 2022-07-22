import React from "react";
import "./Home.css";
import SearchBar from "./SearchBar";

const Home = ({ handleSubmit, searchString, handleChange }) => {
  return (
    <div className="home">
      <div className="home-container">
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <p>Enter A song title at the top to get started</p>
      </div>
    </div>
  );
};

export default Home;
