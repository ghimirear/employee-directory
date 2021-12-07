import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function SearchForm(props) {
  return (
    <div className= "row">
    <div className="form-col col container">
        <form>
        <div className="form-group">
          
            <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a employee"
            id="search"
             style={{width:"220px", marginLeft:"auto", marginRight:"auto"}}/>
        </div>
        </form>
        <div className="buttons-div">
        <button onClick={props.sortResults} className="btn btn-primary ml-auto sort" 

      >
        Sort By Name
        </button>
        </div>
        </div>
        </div>
  );
}

export default SearchForm;