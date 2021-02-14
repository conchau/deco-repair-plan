import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from "../images/deco-logo-white.png";
import NavBar from "react-bootstrap/Navbar";

function HeaderOld() {
    return (
    <NavBar bg="dark" variant="dark" style={{padding: 0}}>
        <img className="logo" src={logo} alt="deco-logo" />
        <NavBar.Collapse>
        <ul>
        <li><NavLink exact to='/login'>Login</NavLink></li>
        <li><NavLink exact to='/option'>Option</NavLink></li>
        </ul>
        </NavBar.Collapse>
    </NavBar>
    )
}

export default HeaderOld;