module API
  class FriendshipsController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      friendships = Friendship.all

      respond_with friendships
    end

    def create
      friendship = Friendship.new(friendship_params)
      

      if friendship.save 
        render json: friendship, status: 201
      else
        # @error = {":error" => friendship.errors}
        # render :json => @error, status 422
        render status 422
      end       
    end


    private
    def friendship_params
      params.require(:friendship).permit(:user_id, :friendee_id, :user_name, :friendee_name)
    end
    # def inverse_friendship_params
    #   params.require(:friendship).permit(:user_id, :friendee_id)
    # end
  end
end