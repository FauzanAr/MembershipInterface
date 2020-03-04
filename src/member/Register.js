import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerActions } from '../actions/registrationActions';

import './Register.css';

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            UsersUsername : '',
            UsersEmail : '',
            UsersPassword : ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        
        const Users = {
            UsersUsername : this.state.UsersUsername,
            UsersEmail : this.state.UsersEmail,
            UsersPassword : this.state.UsersPassword
        }
        this.props.register(Users);
    }

    render() {
        return (
            <div className = "Register">
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
                    <FormGroup controlId = "UsersEmail" bssize = "large">
                        <Form.Label>Email</Form.Label>
                        <FormControl 
                            autoFocus
                            type="email"
                            name="UsersEmail"
                            value={this.state.UsersEmail}
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
                        Daftar
                    </Button>
                </form>
                <p><Link to='/'>Cancel</Link></p>
            </div>
        )
    }
}

const actionCreators = {
    register : registerActions.register
}

const connectedRegisterPage = connect(null, actionCreators)(Register);

export {connectedRegisterPage as Register}; 