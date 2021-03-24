import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../actions/stock_actions';

const stocksReducer = (initialState={}, action) => {
    Object.freeze(initialState);

    switch (action.type) {
        case RECEIVE_STOCKS:
            
            return Object.assign({}, initialState, action.stocks)
        case RECEIVE_STOCK:
            return Object.assign({}, initialState, {[action.stock.id]: action.stock})
        default:
            return initialState;
    }
}

export default stocksReducer;