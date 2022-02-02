var canConvert = function(str1, str2) {
  if(str1.length !== str2.length) return false;
  if(str1 === str2) return true;
  
  let edges = {};
  for(let idx in str1){
    edges[str1[idx]] ? edges[str1[idx]].push(str2[idx]) : edges[str1[idx]] = [str2[idx]];
  }

  for(let key of Object.keys(edges)){
    if(edges[key].length > 1){
      let neighbors = edges[key];
      if(!neighbors.every((ele) => ele===neighbors[0])) return false;
    }
  }
  let set = new Set(str2.split(''));

  return (set.size<26) ? true : false;
};