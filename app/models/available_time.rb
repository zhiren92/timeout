class AvailableTime < ActiveRecord::Base
  belongs_to :user


  def range_overlap(range1, range2)
    # if start_time1 is >= start_time2 and < end_time2 
    # or end_time1 is < end_time2 and > start_time2
    # then overlaps
    if (range1.start_time >= range2.start_time && range1.start_time < range2.end_time) ||
       (range1.end_time < range2.end_time && range1.end_time > range2.start_time)

      overlap_start = [range1.start_time, range2.start_time].max
      overlap_end = [range1.end_time, range2.end_time].min

      return [overlap_start, overlap_end]
        # overlap
    else 
      "no overlaps"
    end
  end
# arr are array of time ranges
  def available_time_overlap(arr1, arr2)
   overlap_arr = []
    for i in 0...arr1.length
      for j in 0...arr2.length
        overlap_arr.push(range_overlap(arr1[i], arr2[j]))
      end
    end
    overlap_arr
  end
end

# test these fnctions
# print out ranges of overlap times