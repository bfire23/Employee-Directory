import React from "react";


function Search({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => handleSearchChange(e)}
          />
          <button className="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
  export default Search;
  