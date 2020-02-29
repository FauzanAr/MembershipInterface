import React, { Component } from 'react'
import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions/memberAction';
import "./Login.css";


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            UsersUsername: '',
            UsersPassword: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e)
    {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        const Users = {
            UsersUsername : this.state.UsersUsername,
            UsersPassword : this.state.UsersPassword
        }

        this.props.userLogin(Users);
    }

    render() {
        return (
            <div className = "Login">
                <form onSubmit={this.onSubmit}>
                    <FormGroup controlId = "UsersUsername" bssize = "large">
                        <Form.Label>Username</Form.Label>
                        <FormControl 
                            autoFocus
                            type="text"
                            name="UsersUsername"
                            value={this.state.UsersUsername}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup controlId = "UsersPassword" bssize = "large">
                        <Form.Label>Password</Form.Label>
                        <FormControl
                            type="password"
                            name="UsersPassword"
                            value={this.state.UsersPassword}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button block bssize="large" type="submit">
                        Login
                    </Button>
                </form>
                <p>Belum memiliki account? <Link to='/register'>Daftar</Link></p>
            </div>
        )
    }
}

Login.propTypes = {
    userLogin: PropTypes.func.isRequired
};

export default connect(null, { userLogin })(Login);