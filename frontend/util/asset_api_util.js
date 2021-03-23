// fetchAssets will take in an userId as an argument
// (1, 3)
export const fetchAssets = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets`,
    })
}


// fetchAsset will take in an assetId, and userId as an argument
// (1)
export const fetchAsset = (userId, assetId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}

// createAsset will take in an asset obj, and an userId as an argument
// (1, {user_id: 1, stock_id: 4, quantity: 20, avg_price: 270.33})
export const createAsset = (userId, asset) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/assets`,
        data: { asset }
    })
}

// updateAsset will take in an asset obj, and an userId as an argument
// (1, {id: 3, quantity: 5, avg_price: 117.34}
export const updateAsset = (userId, asset) => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}/assets/${asset.id}`,
        data: { asset }
    })
}

// destroyAsset will take in an assetId, and userId as an argument
// (1, 2)
export const destroyAsset = (userId, assetId) => {
    // debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/assets/${assetId}`,
    })
}