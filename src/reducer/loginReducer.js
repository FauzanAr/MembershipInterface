import { userConstants } from '../constant/userConstant'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export function loginReducer (state = initialState, action){
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user : action.user
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}