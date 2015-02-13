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

    def not_friends
      current_user = User.find(params[:user_id])
      puts current_user
      puts current_user.friends
      not_friends = current_user.possible_friends

      respond_with not_friends
    end

    

    private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :avatar)
    end
  end
end