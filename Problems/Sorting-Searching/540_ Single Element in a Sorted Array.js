var singleNonDuplicate = function(nums) {
  let idx1=0, idx2 = nums.length-1;
  while(idx1<idx2){
    let mid = Math.floor((idx1+idx2)/2);
    let evenHalves = (idx2-mid) %2 === 0;
    
    if(nums[mid+1] === nums[mid]){
      if(evenHalves){
        idx1 = mid+2;
      } else {
        idx2 = mid-1
      }
    } else if (nums[mid - 1] === nums[mid]){
      if(evenHalves){
        idx2 = mid-2
      } else {
        idx1 = mid+1
      }
    } else {
      return nums[mid];
    }
  }
  
  return nums[idx1];
};