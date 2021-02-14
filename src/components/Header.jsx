import React from "react";
import { NavLink, Switch, Route, Link, useHistory } from 'react-router-dom';
import logo from "../images/deco-logo-white.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {

    const history = useHistory();

    return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
        <img className="logo" src={logo} alt="deco-logo" onClick={() => history.push("/option")} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        {/* <NavLink exact to='/login'>Login</NavLink> */}
        <Nav.Link as={Link} to="/option" href="/option">Home</Nav.Link>
        <Nav.Link as={Link} to="/lookup" href="/lookup">Lookup</Nav.Link>
        {/* <NavLink exact to='/info'>Info</NavLink> */}
        {/* <NavLink exact to='/payment'>Payment</NavLink> */}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Header;