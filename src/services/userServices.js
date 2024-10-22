import { userConstants } from '../constant/userConstant';


export const userServices = {
    login,
    logout,
    register
}

function login (users){
    const reqOption = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'   
        },
        body : JSON.stringify(users)
    };

    return fetch ('http://localhost:5000/v1/api/users/login', reqOption)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const reqOption = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'ApiKey' : userConstants.APIKEY
        },
        body : JSON.stringify(user)
    };

    return fetch ('http://localhost:5000/v1/api/users/register', reqOption).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401)
            {
                logout();
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}