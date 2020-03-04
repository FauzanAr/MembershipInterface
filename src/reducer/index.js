import { combineReducers } from 'redux';

import { alert } from './alertReducer';
import { loginReducer } from './loginReducer';
import { registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
    alert,
    loginReducer,
    registrationReducer
});

export default rootReducer;