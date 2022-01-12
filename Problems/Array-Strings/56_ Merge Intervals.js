var merge = function(intervals) {
  intervals = intervals.sort((a,b) => b[0] - a[0]);
  let output = [intervals.pop()];
  
  if(intervals.length === 0) return output;
  console.log(output)
  
  while(intervals.length){
      let [start, end] = intervals.pop();
      let [inp, out] = output[output.length - 1];
      
      console.log(out >= start)
      if(out >= start){
          let newout = [output.pop()[0], Math.max(end, out)]
          console.log(newout)
          output.push(newout)
      } else {
          output.push([start, end])
      }
  }
  
  return output;
};