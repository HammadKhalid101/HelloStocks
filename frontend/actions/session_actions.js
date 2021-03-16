import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

// receiveCurrentUser will an user object as an argument
const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    }
};

// logoutCurrentUser will not accept any arguments
const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

// receiveErrors will accept an errors array as an argument
const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    }
};

// signup will take in a user object as an argument
export const signup = (user) => dispatch => {
    return APIUtil.signup(user).then((user) => ( 
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

// login will take in a user object as an argument
export const login = (user) => dispatch => {
    return APIUtil.login(user).then((user) => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

// logout will not accept any arguments
export const logout = () => dispatch => {
    return APIUtil.login().then((user) => (
        dispatch(logoutCurrentUser())
    ))
};