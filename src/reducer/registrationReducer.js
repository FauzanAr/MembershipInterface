import { userConstants } from '../constant/userConstant';

export function registrationReducer(state = {}, action){
    switch (action.type) {
        case userConstants.REGISTER:
            return {};
        default:
            return state;
    }
}