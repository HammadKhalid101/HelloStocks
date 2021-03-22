class Api::StocksController < ApplicationController
    def show 
        @stock = Stock.find_by(id: params[:id])
        if @stock
            render :show
        else
            render json: ['Stock not found'], status: 422
        end
    end
end