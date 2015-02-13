class User < ActiveRecord::Base

  has_many :friendship_requests
  has_many :pendingfriends, through: :friendship_requests
  has_many :request_made, class_name: FriendshipRequest
  has_many :request_received, class_name: FriendshipRequest, foreign_key: :friendee_id

  has_many :friendships
  # has_many :friends, through: :friendships

  
  def friends
    @friends_arr = []
    current_user = User.where(id: self.id)
    friends = current_user[0].friendships
    friends.each do |f|
      @friends_arr.push(f.friendee)
    end
   
    @friends_arr
  end



# this defines all possible friends

  def possible_friends
    User.all - self.requesters - self.requestees-self.friends-User.where(id:self.id)
  end 

  
  has_secure_password
  attr_reader :password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: {case_sensitive: false}, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

  def as_json(option={})
    super(:except => [:password_digest, :created_at, :updated_at])
  end

end
