class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :created_at

  has_many :friendship_requests

end
