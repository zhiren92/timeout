module API
  class FriendshipRequestsController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      # request = FriendshipRequest.all 

      user = User.find_by(id: params[:user_id])  
      

      respond_with user.friendship_requests
    end

    def create
      request = FriendshipRequest.new(friendship_request_params)

      if request.save
        render json: request, status:201
      else 
        render json: {errors: request.errors}, status: 422
      end
    end

    def destroy
      request = FriendshipRequest.find(params:[:id])
      request.destroy
      head 204
    end

    private
    def friendship_request_params
      params.require(:friendship_request).permit(:friendee_id, :user_id, :friendee_name)
    end
  end
end