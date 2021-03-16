import {
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullCurrentUserId = Object.freeze({
    currentUserId: null
});

const sessionReducer = (initialState = _nullCurrentUserId, action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUserId: action.currentUser.id })
            // return { currentUserId: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            return _nullCurrentUserId
        default:
            return initialState;
    }
};

export default sessionReducer;