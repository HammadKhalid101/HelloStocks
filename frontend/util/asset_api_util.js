// fetchAssets will take in a userId as an argument
export const fetchAssets = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets`,
    })
}


// fetchAsset will take in a assetId, and userId as an argument
export const fetchAsset = (assetId, userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}

// createAsset will take in an asset obj, and a userId as an argument
export const createAsset = (asset, userId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/assets`,
        data: { asset }
    })
}

// updateAsset will take in an asset obj, and a userId as an argument
export const updateAsset = (assetId, userId) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}/assets/${assetId}`,
        data: { asset }
    })
}

// destroyAsset will take in a assetId, and userId as an argument
export const destroyAsset = (assetId, userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}