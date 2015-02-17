class AddColumnToRequestTable < ActiveRecord::Migration
  def change
    add_column :friendship_requests, :friendee_name, :string
  end
end
