import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom";

import Promotions from '../pages/Promotions.js';
import Rewards from '../pages/Rewards.js';

class Navigation extends React.Component{
    render(){
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Membership</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link><Link to='/promotions'>Promotions</Link></Nav.Link>
                    <Nav.Link><Link to='/rewards'>Rewards</Link></Nav.Link>
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

                <Switch>
                    <Route path ='/'>
                        <Promotions />
                    </Route>
                    <Route path ='/promotions'>
                        <Promotions />
                    </Route>
                    <Route path ='/rewards'>
                        <Rewards />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Navigation;
