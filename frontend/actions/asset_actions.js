import * as APIUtil from '../util/asset_api_util'

export const RECEIVE_ASSET = 'RECEIVE_ASSET';
export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';
export const DELETE_ASSET = 'DELETE_ASSET';
export const RECEIVE_ASSET_ERRORS = 'RECEIVE_ASSET_ERRORS';
export const CLEAR_ASSET_ERRORS = 'CLEAR_ASSET_ERRORS';

// receiveAsset will accept an asset object as an argument
export const receiveAsset = (asset) => {
    debugger
    return {
        type: RECEIVE_ASSET,
        asset,
        // userId
    }
}; 

// receiveAssets will accept assets obj as an argument
export const receiveAssets = (assets) => {
    debugger
    return {
        type: RECEIVE_ASSETS,
        assets,
    }
}; 

// deleteAsset will accept an assetId and userId as arguments
export const deleteAsset = (assetId) => {
    debugger
    return {
        type: DELETE_ASSET,
        assetId,
        // userId,
    }
};

// receiveAssetErrors will accept an errors array as an argument
export const receiveAssetErrors = (errors) => {
    return {
        type: RECEIVE_ASSET_ERRORS,
        errors,
    }
};

// clearAssetErrors will not accept an argument
export const clearAssetErrors = () => {
    return {
        type: CLEAR_ASSET_ERRORS,
    }
}

// getAsset will take in an assetId, and userId as arguments
// (1, 3)
export const getAsset = (userId, assetId) => dispatch => {
    debugger
    return APIUtil.fetchAsset(userId, assetId).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// getAllAssets will take in an userId as an argument
// (1)
export const getAllAssets = (userId) => dispatch => {
    return APIUtil.fetchAssets(userId).then((assets) => ( 
        dispatch(receiveAssets(assets))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// buyNewAsset will take in an userId and asset obj as arguments
// (1, {user_id: 1, stock_id: 4, quantity: 20, avg_price: 270.33})
export const buyAsset = (userId, asset) => dispatch => {
    return APIUtil.createAsset(userId, asset).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// updateOldAsset will take in an userId and asset {quantity: new_quan, avg_price: new_avg} obj as arguments
// (1, {id: 3, quantity: 5, avg_price: 117.34}
export const updateOldAsset = (userId, asset) => dispatch => {
    debugger
    return APIUtil.updateAsset(userId, asset).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// sellAsset will take in an assetId obj, and userId as arguments
// (1, 2)
export const sellAsset = (userId, assetId) => dispatch => {
    debugger
    return APIUtil.destroyAsset(userId, assetId).then((asset) => ( 
        dispatch(deleteAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};