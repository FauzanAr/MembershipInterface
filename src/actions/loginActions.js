import { userConstants } from '../constant/userConstant';
import { userServices } from '../services/userServices';
import { history } from '../history';

export const loginActions = {
    login,
    logout
};


function login(user){
    return dispatch => {
        userServices.login(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/home');
                }
            );
    };

    function success(user) { return { type : userConstants.LOGIN_REQUEST, user }}
}

function logout(){
    userServices.logout();
    return { type : userConstants.LOGOUT };
}