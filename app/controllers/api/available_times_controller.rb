module API

  class AvailableTimesController < ApplicationController
    protect_from_forgery with: :null_sessions
    respond_to :json

    def index
      start_times = AvailableTime.all

      respond_with start_times
    end

    def create
      start_time = AvailableTime.new(available_time_params)

      if start_time.save
        render json: start_time, status:201
      else
        render json: {errors: request.errors}, status: 422
      end
    end


    private
    def available_time_params
      params.require(:available_time).permit(:user_id, :start_time, :end_time)
    end
  end
end