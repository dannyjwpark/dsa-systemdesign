/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area=0;
    let l = 0;
    let r = height.length - 1;
    
    while (l < r) {
        area = Math.max(area, Math.min(height[l], height[r]) * (r-l));
        if(height[l] < height[r]){
            l++
        } else {
            r--
        }
    }
    
    return area;
}