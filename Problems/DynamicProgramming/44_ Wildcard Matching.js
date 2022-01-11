var isMatch = function(s, p) {
  let sArr = s.split('');
  let pArr = p.split('');
  let ptS = 0, ptP = 0;
  let pointer = -1, starIdx = -1;
  
  while(ptS < s.length){
    if(ptP < p.length && (s[ptS] === p[ptP] || p[ptP] === '?')){
      ptS ++;
      ptP ++;
    } else if (ptP < p.length && (p[ptP] === '*')){
      starIdx = ptP;
      pointer = ptS;
      ptP ++;
    } else if (starIdx === -1){
      return false;
    } else {
      ptP = starIdx + 1;
      ptS = pointer + 1;
      pointer = ptS;
    }
  }
  
  for(let i=ptP; i<p.length; i++){
    if(p[i] !== '*') return false;
  }
  
  return true;
    
};