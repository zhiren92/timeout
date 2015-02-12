class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :created_at, :inverse_requested

  has_many :friendship_requests
  has_many :friendships

  delegate :current_user, :to => :scope

# defines people who have requested you to be their friend
  def inverse_requested
    inverse_resquest = FriendshipRequest.where(friendee_id: object.id)
  end
end
