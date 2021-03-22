// fetchStock will take in a stockId  as an argument
export const fetchStock = (stockId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/stocks/${stockId}`,
    })
}