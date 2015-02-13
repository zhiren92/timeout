module API
  class FriendshipsController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      friendships = Friendship.all

      respond_with friendships
    end

    def show
      friendship = Friendship.find(params[:id])

      respond_with friendship
    end

    def create
      friendship = Friendship.new(friendship_params)
      friendship2 = Friendship.new(friendship_params)
      friendship2.user_id = friendship.friendee_id
      friendship2.friendee_id = friendship.user_id
      friendship2.user_name = friendship.friendee_name
      friendship2.friendee_name = friendship.user_name

      if friendship.save && friendship2.save
        render json: friendship, status: 201
      else
        # @error = {":error" => friendship.errors}
        # render :json => @error, status 422
        render status 422
      end       
    end

    # def update
    #   friendship = Friendship.where(friendship_params)
    #   friendship.destroy

    #   head 204
    # end

    def destroy
      friendship = Friendship.find(params[:id]) 
      friendship2 = Friendship.where(["user_id = ? and friendee_id = ?", friendship.friendee_id, friendship.user_id]).first
      puts friendship2.inspect

      friendship.destroy
      friendship2.destroy

      head 204
    end

    # def inv_delete
    #   friendship = Friendship.where(params)
    #   friendship.destroy
    #   head 204
    # end

    private
    def friendship_params
      params.require(:friendship).permit(:user_id, :friendee_id, :user_name, :friendee_name)
    end
  end
end