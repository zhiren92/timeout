class AddColumnsToFriendshipsTable < ActiveRecord::Migration
  def change
    add_column :friendships, :user_name, :string
    add_column :friendships, :friendee_name, :string
  end
end
