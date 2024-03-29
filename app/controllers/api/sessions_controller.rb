class Api::SessionsController < ApplicationController

    def create
        # debugger
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user.nil?
            render json: ["Unable to log in with provided credentials."], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if current_user
            logout!
            render json: {message: 'logout successful'}
        else
            render json: ['no logged in user found'], status: 404 
        end
    end
end
