class AvailableTimeSerializer < ActiveModel::Serializer
  attributes :id,:user_id, :start_time, :end_time
end
