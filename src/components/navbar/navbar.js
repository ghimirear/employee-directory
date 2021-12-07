import React from "react";
import '../styles/navbar.css';

function Navbar() {
    return ( 
      <nav className =" nav navbar navbar-expand-lg navbar-light" style={{position:"sticky", top:"0", left:"0", zIndex:"1"}}>
       <h1> Employee Directory</h1>
      </nav>
    );
  }
  
  export default Navbar;