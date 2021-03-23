import { 
    RECEIVE_ASSET,
    RECEIVE_ASSETS,
    DELETE_ASSET,
 } from '../actions/asset_actions';

const assetReducer = (initialState={}, action) => {
    Object.freeze(initialState);
    let newState = Object.assign({}, initialState)
    switch (action.type) {
        case RECEIVE_ASSET:
            // debugger
            return Object.assign({}, initialState, {[action.asset.id]: action.asset})
        case RECEIVE_ASSETS:
            // debugger
            return action.assets
        case DELETE_ASSET:
            // debugger
            delete newState[action.assetId]
            return newState;
        default:
            return initialState;
    }
}

export default assetReducer;