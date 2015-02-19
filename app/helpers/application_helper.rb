module ApplicationHelper
  # after getting a datetime obj this will return an arr with the range 
  def get_range(time_obj)
    range_beg = time_obj.start_time
    range_end = time_obj.end_time
    user = time_obj.user.name

    range = [range_beg, range_end, user]
  end

# you can get the arr with multiple time ranges after inputting the total available_time arr

  def get_range_arr(time_obj_arr)
    range_arr=[]
    for i in 0...time_obj_arr.length
      range_arr.push(get_range(time_obj_arr[i]))
    end
    range_arr
  end

# this checks if a time range over laps
  def range_overlap(range1, range2)
    # if start_time1 is >= start_time2 and < end_time2 
    # or end_time1 is < end_time2 and > start_time2
    # then overlaps
    overlap_start = [range1[0], range2[0]].max
    overlap_end = [range1[1], range2[1]].min

    if (range1[0] >= range2[0] && range1[0] < range2[1]) || (range1[1] < range2[1] && range1[1] > range2[0])
      return [overlap_start, overlap_end, range1[2], range2[2]]
    elsif (range1[0]>range2[0]&&range1[1]<range1[1]) 
      return [range1[0], range1[1],range1[2], range2[2]]
    else
      return [range2[0], range2[1],range1[2], range2[2]]
    end
  end

# arr are array of time ranges
# by inputting arr of available times from 2 users it it will return the all the overlap times 
# returns an array of overlapping times 

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
