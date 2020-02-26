import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from "react-router-dom";
import './Navigations.css';


class Navigation extends React.Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to ='/'>Membership</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-na">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/promotions">Promotions</Nav.Link>
                <Nav.Link as={Link} to="/rewards">Rewards</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Edit Password</NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
