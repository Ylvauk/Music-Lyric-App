import React, { useContext } from "react";
import { AppContext } from "../App";

const Home = ({ handleSubmit, searchString, handleChange}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
          placeholder="Search A Song"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
      <h1>Music Finder</h1>
      <p>Enter A song title at the top to get started</p>
    </div>
  )
};

export default Home;
