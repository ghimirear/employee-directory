import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function SearchForm(props) {
  return (
    <div className= "row">
    <div className="form-col col col-offset-3">
        <form>
        <div className="form-group">
            <label htmlFor="search"><h3> Search:</h3></label>
            <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a employee"
            id="search"
            />
        </div>
        </form>
        <div className="buttons-div">
        <button onClick={props.sortResults} className="btn btn-primary ml-auto sort">
        SORT
        </button>
        </div>
        </div>
        </div>
  );
}

export default SearchForm;