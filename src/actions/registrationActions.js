import { userConstants } from '../constant/userConstant';
import { userServices } from '../services/userServices';
import { history } from '../history';

export const registrationActions = {
    registration
}

function registration (user) {
    return dispatch => {
        userServices.register(user)
            .then(
                user =>{
                    dispatch(register(user))
                    history.push('/')
                }
            );
    };

    function register (user) { return { type: userConstants.REGISTER, user}};;
}