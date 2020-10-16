import React from "react";
import "../styles/Search.css"


function Search(props) {
  return (
    <div className= "searchbox">
        <form className="form-inline">
        <input 
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control mr-sm-2 "
          placeholder="Search For Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-outline-primary my-2 my-sm-0">
          Search
        </button>
    </form>
      </div>
  );
}
        

export default Search;
  