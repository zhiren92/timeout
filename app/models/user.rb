class User < ActiveRecord::Base

  has_secure_password
  attr_reader :password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: {case_sensitive: false}, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

  def as_json(option={})
    super(:except => [:password_digest, :created_at, :updated_at])
  end

end
