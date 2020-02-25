import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

class Navigation extends React.Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Membership</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#promotions">Promotions</Nav.Link>
                <Nav.Link href="#rewards">Rewards</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Login" id="basic-nav-dropdown" variant="dark">
                <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Edit Password</NavDropdown.Item>
                <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Text><br></br></Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
