import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";



function Header() {
  console.log("header")
  return (

<div className="header">
  
      <Link to="/"className="heading">
        INTUITIVE QUIZ HUB
      </Link>
      <hr className="divider"/>
    </div>
    
    
  );
}
export default Header;
