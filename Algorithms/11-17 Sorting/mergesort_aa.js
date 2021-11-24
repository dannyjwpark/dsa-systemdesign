defaultComparator = function(a,b){
    if(a<b) return -1;
    if(b<a) return 1;
    return 0;
}

Array.prototype.mergeSort = function (func=defaultComparator) {
    if (this.length <= 1) return this;  // base case

    let mid = Math.floor(this.length / 2);
    let leftHalf = this.slice(0,mid);   // mid cannot be in the left half
    let rightHalf = this.slice(mid);    // mid is included in the right half

    let left = leftHalf.mergeSort(func);
    let right = rightHalf.mergeSort(func);

    function merge(left, right, func) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }

        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [...arr, ...left, ...right]
    }
    return merge(left, right, func);

}

console.log([2, 5, 3, 9, 4].mergeSort(defaultComparator));
console.log([2, 4, 7, 2, 54, 7, 4].mergeSort(defaultComparator));