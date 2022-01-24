// expectation: words.length >= 1

var topKFrequent = function(words, k) {
  // base case :  if words.length < k, return null;
  if(words.length < k) return null;
  
  // declare a frequencyHash & keep track of frequencies of each word
  let frequencyHash = {};
  for(let word of words){
    frequencyHash[word] ? frequencyHash[word]++ : frequencyHash[word] = 1;
  }
  
  // {i:3, love:2, smartshett:1} => [["i", 3], ["love", 2], ....]
  // convert frequencyHash to nested array => sort biggest to smallest
  let frequencyArr = Object.entries(frequencyHash).sort((a,b) => {
//     (a[1]-b[1] === 0) ? (a[0].charCodeAt(0) - b[0].charCodeAt(0)) : (b[1]-a[1])
    if(a[1]>b[1]){
      return -1
    } else if (a[1] === b[1]){
      return a[0].charCodeAt(0) > b[0].charCodeAt(0) ? 1 : -1;
    } else {
      return 1;
    }
  });
  console.log(frequencyArr);
  
  
  // return frequencyArray.slice(0, k)
  return frequencyArr.slice(0, k);
};

// // Expected result: i: 3, love: 2
console.log(topKFrequent(["i", "smartsheet", "love", "coding","smartsheet", "i", "love", "coding", "i"], 2));

// console.log('smartsheet'.charCodeAt(0))
// console.log('love'.charCodeAt(0))