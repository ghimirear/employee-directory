import React from "react";
import "./styles.css";
function SearchResults(props){
    return(
        <div className="card-container">
        {       // filtering the array to show employee according to the input value which is passed in props(props.state.search)
            props.results.filter(result => result.name.first.toLowerCase().includes(props.state.search)||result.name.last.toLowerCase().includes(props.state.search) || result.phone.includes(props.state.search) )
            .map(item =>(
                <div className="card mt-2 m-2" key={item.login.md5}>
                    <div className="card-header">
                        <h4>Name: {item.name.first + " " + item.name.last}</h4>
                    </div>
                    <div className="card-body">
                        <img src={item.picture.large} className="ml-5" alt={item.phone}></img>
                        <h5 className="mt-3"> {item.location.city} {item.location.state} {item.location.country}</h5>
                        <h5 className="mt-3">Email: {item.email}</h5>
                        <h5 className="mt-3 mb-3">Phone: {item.phone}</h5>
                    </div>
                </div> 
            ))
        }
    </div>
    )
   
}
    

export default SearchResults;