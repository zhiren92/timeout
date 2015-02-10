module API
  class FriendshipRequestsController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      requests = FriendshipRequest.all

      respond_with requests
    end

    def create
      request = FriendshipRequest.new({:friendee_id=>params[:friendee_id], :user_id=>current_user.id})

      if request.save
        render json: request, status:201
      else 
        render json: {errors: user.errors}, status: 422
      end
    end
  end
end