// fetchAssets will take in an userId as an argument
export const fetchAssets = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets`,
    })
}


// fetchAsset will take in an assetId, and userId as an argument
export const fetchAsset = (userId, assetId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}

// createAsset will take in an asset obj, and an userId as an argument
export const createAsset = (userId, asset) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/assets`,
        data: { asset }
    })
}

// updateAsset will take in an asset obj, and an userId as an argument
export const updateAsset = (userId, asset) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}/assets/${asset.id}`,
        data: { asset }
    })
}

// destroyAsset will take in an assetId, and userId as an argument
export const destroyAsset = (userId, assetId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}