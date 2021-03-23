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
export const getAsset = (userId, assetId) => dispatch => {
    return APIUtil.fetchAsset(userId, assetId).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// getAllAssets will take in an userId as an argument
export const getAllAssets = (userId) => dispatch => {
    return APIUtil.fetchAssets(userId).then((assets) => ( 
        dispatch(receiveAssets(assets))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// buyNewAsset will take in an asset obj, and userId as arguments
export const buyAsset = (userId, assetId) => dispatch => {
    return APIUtil.createAsset(userId, assetId).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// updateOldAsset will take in an assetId obj, and userId as arguments
export const updateOldAsset = (userId, assetId) => dispatch => {
    return APIUtil.updateAsset(userId, assetId).then((asset) => ( 
        dispatch(receiveAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};

// sellAsset will take in an assetId obj, and userId as arguments
export const sellAsset = (userId, assetId) => dispatch => {
    return APIUtil.destroyAsset(userId, assetId).then((asset) => ( 
        dispatch(deleteAsset(asset))
    ), err => (
        dispatch(receiveAssetErrors(err.responseJSON))
    ))
};