import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware));

export default store;
