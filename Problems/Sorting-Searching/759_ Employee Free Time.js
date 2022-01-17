/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    let ans = [];
    
    let sorted = schedule.reduce((a,b) => [...a, ...b]).sort((a,b) => a.start-b.start);
    
    if(schedule.length <= 1) return [];
    
    let lastEnd = sorted[0].end;
    let lastStart = sorted[0].start;
    
    for(let sched of sorted.slice(1)){
        if(sched["start"] > lastEnd){
            ans.push(new Interval(lastEnd, sched["start"]))
        }
        lastEnd = Math.max(sched["end"], lastEnd);
        lastStart = sched.start
    }
    
    return ans
    
};