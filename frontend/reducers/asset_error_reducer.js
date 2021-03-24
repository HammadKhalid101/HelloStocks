import {
    RECEIVE_ASSET_ERRORS,
    CLEAR_ASSET_ERRORS,
} from '../actions/asset_actions';

const assetErrorReducer = (initialState = [], action) => {
    Object.freeze(initialState);
    switch (action.type) {
        case RECEIVE_ASSET_ERRORS:
            return action.errors;
        case CLEAR_ASSET_ERRORS:
            return [];
        default:
            return initialState;
    }
}

export default assetErrorReducer;