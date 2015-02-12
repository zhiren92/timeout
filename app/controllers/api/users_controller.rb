module API
  class UsersController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      users = User.all

      respond_with users
    end

    def show
      user = User.find(params[:id])

      respond_with user
    end
    def create
      user = User.new(user_params)
      if user.save
        render json: user, status: 201
      else
        render json: {errors: user.errors}, status: 422
      end
    end

    

    private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
    end
  end
end