import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from "react-router-dom";
import './Navigations.css';


class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            AccessToken:'',
            RefreshToken:'',
            UsersId:'',
            UsersName:''
        };
    }
    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('user')))
    }
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to ='/home/promotions'>Membership</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home/promotions">Promotions</Nav.Link>
                <Nav.Link as={Link} to="/home/rewards">Rewards</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={this.state.UsersName} id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Divider />
                        <NavDropdown.Item href="/home/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
