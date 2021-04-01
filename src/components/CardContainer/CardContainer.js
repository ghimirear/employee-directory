import React from "react";
import "./styles.css"
function CardContainer(props){
    return(
        <div className="card-container container-fluid">{props.children}</div>
    )
}
export default CardContainer;