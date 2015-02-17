class AddColumnToTimeTable < ActiveRecord::Migration
  def change
    add_column :available_times, :end_time, :datetime
  end
end
