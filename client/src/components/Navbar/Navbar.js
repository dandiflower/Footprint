import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav--height">
       <span><a className="navbar-brand" href="/">
            Footprint Calculator
       </a>
        <img src="favicon.ico" width="30" height="30" class="d-inline-block align-top" id="logoimg" alt="logo"></ img>
        </span>
    </nav>
);

export default Navbar;
