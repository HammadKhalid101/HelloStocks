class Api::StocksController < ApplicationController
    def show 
        @stock = Stock.find_by(id: params[:id])
    end
end