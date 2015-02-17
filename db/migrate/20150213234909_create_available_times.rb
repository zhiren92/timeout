class CreateAvailableTimes < ActiveRecord::Migration
  def change
    create_table :available_times do |t|
      t.references :user, index: true
      t.datetime :start_time

      t.timestamps
    end
  end
end
