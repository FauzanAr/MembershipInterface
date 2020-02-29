import { USER_LOGIN, NEW_REGISTER } from './types';

export const userLogin = (userLogin) => dispatch => {
    fetch('http://localhost:5000/v1/api/users/login',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(userLogin)
    })
    .then(res => res.json())
    .then(res => localStorage.setItem('user', JSON.stringify(res)));
}