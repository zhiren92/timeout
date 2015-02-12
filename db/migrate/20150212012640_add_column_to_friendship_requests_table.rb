class AddColumnToFriendshipRequestsTable < ActiveRecord::Migration
  def change
    add_column :friendship_requests, :requester_name, :string
  end
end
