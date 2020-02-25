import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

class Navigation extends React.Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Membership</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Promotions</Nav.Link>
                <Nav.Link href="#link">Rewards</Nav.Link>
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
