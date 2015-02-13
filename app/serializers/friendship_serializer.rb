class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_name, :friendee_name, :friendee_id
end
