def bsearch(arr, target) # returns the index of where the target is, or nil if the target is not in the array
  return nil if arr.length < 1 # base case

  mid = arr.length / 2
  return mid if arr[mid] == target # other base case

  lower_half = arr[0...mid]
  upper_half = arr[mid+1..-1]

  if target < arr[mid] # if the target will be in the lower half of the array
    return bsearch(lower_half, target)
  else # if the target will be in the upper half of the array
    result = bsearch(upper_half, target)
    return nil if result == nil
    return lower_half.length + 1 + result
  end

end

p bsearch([1,3,4,8,12,17], 4)    # == 2
p bsearch([1,3,4,8,12,17], 17)   # == 5
p bsearch([1,2,7,11,12,17], -5)  # == nil
p bsearch([1,3,4,8,12], 1)       # == 0
p bsearch([1,3,4,8,12], 9)       # == nil