module API
  class FriendshipsController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def create
      friendship = current_user.friendships.build(friendship_params)
      inverse_friendship = current_user.friendships.build(inverse_friendship_params)

      if friendship.save && inverse_friendship.save
        render json: request, status:201
      else
        render json: {errors: friendship.errors}, status 422
      end       
    end


    private
    def friendship_params
      params.require(:friendship).permit(:user_id, :friendee_id)
    end
    def inverse_friendship_params
      params.require(:friendship).permit(:user_id, :friendee_id)
    end
  end
end