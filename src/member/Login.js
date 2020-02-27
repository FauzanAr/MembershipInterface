import React, { Component } from 'react'
import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";


export default class Login extends Component {
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

        fetch('http://localhost:5000/v1/api/users/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(Users)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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
