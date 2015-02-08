class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.references :user, index: true
      t.references :friendee, references: :user, index: true

      t.timestamps
    end
  end
end
