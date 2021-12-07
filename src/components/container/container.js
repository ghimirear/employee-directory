import React from "react";

function Container(props) {
  return <div className="container-fluid" style={{backgroundColor:"grey"}}>{props.children}</div>;
}

export default Container;