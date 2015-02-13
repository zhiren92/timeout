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

      if friendship.save 
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
      friendship.destroy
      head 204
    end

    def inv_delete
      friendship = Friendship.where(params)
      friendship.destroy
      head 204
    end

    private
    def friendship_params
      params.require(:friendship).permit(:user_id, :friendee_id, :user_name, :friendee_name)
    end
  end
end