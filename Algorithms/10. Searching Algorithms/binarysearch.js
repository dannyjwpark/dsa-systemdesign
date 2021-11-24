function binarySearch(arr,target){
    // debugger
    if (arr.length < 1) return -1;

    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === target ) return mid;

    let lowerHalf = arr.slice(0,mid);
    let upperHalf = arr.slice(mid+1);

    if(target < arr[mid]){
        return binarySearch(lowerHalf, target);
    } else{
        let result = binarySearch(upperHalf, target);
        if (result === -1){
            return -1;
        } else {
            return result +1 + mid;
        }
    }
}

console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1, 2, 3, 4, 5,6,7,8,9,10], 7 ));