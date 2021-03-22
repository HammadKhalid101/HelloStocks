import * as APIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';

// receiveStock will a stock object as an argument
export const receiveStock = (stock) => {
    return {
        type: RECEIVE_STOCK,
        stock,
    }
}; 