class Api::AssetsController < ApplicationController
    def index 
        @assets = Asset.includes(:stocks).where(user_id: params[:user_id])
        # @user_id = User.find_by(id: params[:user_id]).id
        # debugger
        if @assets
            render :index
        else
            render json: @assets.errors.full_messages, status: 422
        end
    end

    def show 
        @asset = Asset.find_by(id: params[:id])
        # debugger
        if @asset
            render :show
        else
            render json: @asset.errors.full_messages, status: 422
        end
    end
end