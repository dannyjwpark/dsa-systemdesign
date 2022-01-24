

// find & return most frequent integer in an array?

// arr1 = [1, 2, 2, 3, 4]
  // return 2

// arr2 = [5, 3, 4, 2, 2, 4, 4, 4, 7]
  // return 4


// function mostFreqInt (arr){
  // declare a frequency hash
  let hash = {};

  // iterate over input arr, increment each encountering of unique integers
  for(let int of arr){
    hash[int] ? hash[int]++ : hash[int] = 1;
  }

  // sort the hash biggest->smallest as form of entries

  // return the first element (integer) of the entries of freq hash

}


---------------------------------------------------------------------
// in-memory cache with expiring entries

// async function that looks up entry (d = data) inside memory expires within (t = now)
  // given a key, look up on local memory entries
  // declare a variable that accesses localStorage

  keyInput === k{ 
    let dataObj;
    if(keyInput in localStorageArr && localStorageArr[k].time >= (5 mins before Date.now() )){
      return localStorageArr[k]
    } else {
      let d = lookup(k);
      if( d ){
        // verify if d data was not from > 5 mins ago
        dataObj = 
        { k, 
          {
            data: d,
            time: now
          }
         }
      }


      localStorageArr[k] = dataObj["data"];
      return d;
    }
  }


  // Object.entries(variable).map((k,v))=> if k === keyInput, return
  // if it did not return, return false after __ time (set time out)