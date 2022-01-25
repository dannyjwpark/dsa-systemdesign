// given input "s" string and a patttern "p", implement regular expression matching with "." and "*"
"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


function regexMatch(string, pattern){
    // . : any single char, *: 0 or more iterations of preceding element
    let str = string.split(''), pat = pattern.split('');
    let queue = [];
    // while loop until str, pat length exists
    while(str.length || pat.length){
        // compare first chars of each
        let s, p;
        if(str[0] === pat[0] || pat[0] === "."){
            p = pat.shift();
            s = str.shift();
            queue.push(p);    
        } else if (pat[0]==="*"){
            if(str[0] === queue[0]){
                s = str.shift();
            } else {
                p = pat.shift();
            }
        } else if(pat[0] !== str[0] && pat[1] === '*'){
            p= pat.slice(2);
        } else {
          console.log("false");
          return false;
        }

        // if p[0] = '.', move both pointers

        // if pattern = *, move the str pointer until encountering char different than p[-1]
            // if follwoing pattern char !== str, or ., return false
    
    }

    console.log("true");
    return true
}


regexMatch('aaaab', 'a*b');   // true
regexMatch('c', 'a*cb')  // true
regexMatch('abc', 'a.c') // true
regexMatch('abcccd', '.bc*d') // true
regexMatch('abcd', 'a*ac') // false
