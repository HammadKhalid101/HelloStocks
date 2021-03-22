import * as APIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCK_ERRORS = 'RECEIVE_STOCK_ERRORS';
export const CLEAR_STOCK_ERRORS = 'CLEAR_STOCK_ERRORS'

// receiveStock will a stock object as an argument
export const receiveStock = (stock) => {
    return {
        type: RECEIVE_STOCK,
        stock,
    }
};

// receiveStockErrors will accept an errors array as an argument
export const receiveStockErrors = (errors) => {
    return {
        type: RECEIVE_STOCK_ERRORS,
        errors,
    }
};

// clearStockErrors will not accept an argument
export const clearStockErrors = () => {
    return {
        type: CLEAR_STOCK_ERRORS,
    }
}

// fetchStock will take in a stockId as an argument
export const fetchStock = (stockId) => dispatch => {
    return APIUtil.fetchStock(stockId).then((stock) => ( 
        dispatch(receiveStock(stock))
    ), err => (
        dispatch(receiveStockErrors(err.responseJSON))
    ))
};
