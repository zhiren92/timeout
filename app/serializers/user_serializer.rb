class UserSerializer < ActiveModel::Serializer
  include ApplicationHelper

  attributes :id, :name, :email, :created_at, :inverse_requested, :overlap_ranges

  has_many :friendship_requests
  has_many :friendships
  has_many :available_times

  delegate :current_user, :to => :scope

# defines people who have requested you to be their friend
  def inverse_requested
    inverse_resquest = FriendshipRequest.where(friendee_id: object.id)
  end

  def overlap_ranges
    own_freetime = AvailableTime.where(user_id: object.id)
    friends_freetime = object.friends_available_times

    own_time_range = get_range_arr(own_freetime)
    friends_time_range = get_range_arr(friends_freetime)

    available_time_overlap(own_time_range, friends_time_range)
  end

end
