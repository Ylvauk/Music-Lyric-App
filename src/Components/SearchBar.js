import React from "react";
import { Context } from "../App";

const SearchBar = ({ handleSubmit, handleChange, searchString }) => {
  return (
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
  );
};

export default SearchBar;
