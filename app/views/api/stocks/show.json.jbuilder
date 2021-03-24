json.partial! 'api/stocks/stock', stock: @stock
# json.set! @stock.tikr do 
#     json.extract! @stock, :id, :name, :tikr, :last_price, :percent_change
# end