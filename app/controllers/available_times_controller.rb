class AvailableTimesController < ApplicationController

  # def new
  #   @time = AvailableTime.new
  # end

  # def create
  #   @time = current_user.available_times.create(available_times_params)
  #   redirect_to home_path
  # end

  # private
  # def available_times_params
  #   params.require(:available_time).permit(:user_id,:available_time)
  # end

  def compare_times
    range_arr1 = get_range_arr(current_user.available_times)
    range_arr2 = get_range_arr(current_user.friends[0].available_times)

    available_time_overlap(range_arr1, range_arr2)

  end

end
