import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{

    return(
       <div className="navbar">
        <div className="nav-1">
            <Link to="" className="link">Shopping Cart</Link>
        </div>
        <div className="nav-2"> 
            <Link to="/" className="link">Home Page</Link>
            <Link to="/cart" className="link">Cart Page</Link>
        </div>
       </div>
    );
}

export default Navbar;