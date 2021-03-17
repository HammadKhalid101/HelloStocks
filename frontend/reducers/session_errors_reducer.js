import {
    RECEIVE_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';

const sessionErrorsReducer = (initialState = [], action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return initialState;
    }
}

export default sessionErrorsReducer;