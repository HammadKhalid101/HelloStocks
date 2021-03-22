import {
    RECEIVE_STOCK_ERRORS,
    CLEAR_STOCK_ERRORS,
} from '../actions/stock_actions';

const stockErrorReducer = (initialState = [], action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_STOCK_ERRORS:
            return action.errors;
        case CLEAR_STOCK_ERRORS:
            return [];
        default:
            return initialState;
    }
}

export default stockErrorReducer;