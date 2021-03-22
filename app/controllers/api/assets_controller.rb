class Api::AssetsController < ApplicationController
    def index 
        @user = User.find_by(id: params[:user_id])
        @assets = Asset.includes(:stocks).where(user_id: @user.id)
        # @user_id = User.find_by(id: params[:user_id]).id
        # debugger
        if @assets
            render :index
        else
            render json: ["You don't have any assets, time to buy some"], status: 422
        end
    end

    def show 
        # debugger
        # @asset = Asset.find_by(id: params[:id])
        @user = User.find_by(id: params[:user_id])
        @asset = User.find_by(id: @user.id).assets.find_by(id: params[:id])

        # debugger
        if @asset
            render :show
        else
            render json: ["Asset not found"], status: 422
        end
    end

    # http://localhost:3000/api/users/8/assets?asset[user_id]=8&asset[stock_id]=3&asset[quantity]=5&asset[avg_price]=260.49

    def create 
        @asset = Asset.new(asset_params)
        @user = User.find_by(id: params[:user_id])
        # debugger
        if (buying_power - asset_total_cost) > 0
            # debugger
            if @asset.save!
                @user.charge(asset_total_cost)
                render :show
            end
        # debugger
        # @user_id = user_id: params[:user_id]
        # debugger
        else
            render json: ["Not enough buying power"], status: 422
        end 
    end

    def update
        @user = User.find_by(id: params[:user_id])
        @asset = @asset = Asset.find_by(user_id: @user.id)
        if @asset.update(asset_params)
            render :show
        else
            render json: ["Not enough buying power"], status: 422
        end 

    end

    def destroy
        @asset = Asset.find_by(id: params[:id])
        @user = User.find_by(id: params[:user_id])
        # debugger
        if @asset
            # debugger
            @user.credit(asset_total_value)
            # debugger
            @asset.destroy
            @stock = Stock.find_by(id: @asset[:stock_id])
            # debugger
            render json: { message: "You have sold #{@asset.quantity} shares of #{@stock.tikr} at $#{@stock.last_price}"}
        else
            render json: ['Asset does not exist']
        end
    end

    private

    def asset_params
        # params.permit(:asset).require(:user_id, :stock_id, :quantity, :avg_price)
        params.require(:asset).transform_keys(&:underscore).permit(:user_id, :stock_id, :quantity, :avg_price)
    end

    def buying_power 
        User.find_by(id: params[:user_id]).buying_power
    end

    # def update_buying_power
    #     user = 
    #     User.find_by(id: params[:user_id]).update(buying_power:  
    # end

    def asset_total_cost
        (params[:asset][:quantity].to_i) * (params[:asset][:avg_price].to_i)
    end

    def asset_total_value
        # debugger
        @asset = Asset.find_by(id: params[:id])
        # debugger
        (@asset[:quantity].to_i) * (@asset[:avg_price].to_i)
    end
end