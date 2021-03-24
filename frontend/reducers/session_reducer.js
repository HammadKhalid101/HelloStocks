import {
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (initialState = _nullUser, action) => {
    Object.freeze(initialState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return initialState;
    }
};

export default sessionReducer;