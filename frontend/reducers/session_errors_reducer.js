import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const sessionErrorsReducer = (initialState = [], action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return initialState;
    }
}

export default sessionErrorsReducer;