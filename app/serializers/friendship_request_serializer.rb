class FriendshipRequestSerializer < ActiveModel::Serializer
  attributes :id,  :requester_id, :friendee_id,:friendee_name, :created_at


  def requester_id
    object.user_id
  end

  
end
