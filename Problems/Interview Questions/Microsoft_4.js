"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


function collisions(asteroids){
    // declare stack, w/ first asteroid
    let stack = [asteroids.shift()];
    let direction;
    stack[0] > 0 ? direction = "right" : direction = "left";

    // loop until asteroids is empty
    while(asteroids.length > 0){
        let incomingAst = asteroids.shift();
        let incomingDir;
        incomingAst >0 ? incomingDir = "right" : incomingDir = "left";

        if(incomingDir === direction || (incomingDir === "right" && direction === "left")){
            stack.push(incomingAst);
        } else {
            if(stack.length === 0){
                stack.push(incomingAst);
                direction = "left"; 
            }
            // compare absolute value of incomingAst vs asteroid top of the stack
            for(let i = stack.length - 1; i>=0; i--){
                let topAsteroid = stack[i];
                if(Math.abs(topAsteroid) < Math.abs(incomingAst) && (direction === "right" && incomingDir === "left") ){
                    stack.pop();
                    stack[stack.length-1] >0 ? direction = "right" : direction = "left";
                } else if (Math.abs(topAsteroid) === Math.abs(incomingAst) && (direction === "right" && incomingDir === "left")){
                    stack.pop();
                    if(stack.length>0) {
                        stack[stack.length-1] >0 ? direction = "right" : direction = "left";
                    }
                    incomingDir = null;
                    break;
                } else if (Math.abs(topAsteroid) > Math.abs(incomingAst)) {
                    incomingDir = null;
                    break;
                } else if (stack.length === 0 ){
                    stack.push(incomingAst);
                    incomingAst >0 ? direction = "right" : direction = "left";
                } else {
                    stack.push(incomingAst);
                    incomingAst >0 ? direction = "right" : direction = "left";
                }
            }
            
        }
    }

    return stack;

}

let asteroids1 = [5, 10, -5];
let asteroids2 = [8, -8];
let asteroids3 = [10, 2, -5];
let asteroids4 = [-10, -2, 8]
let asteroids5 = [-10, -2, 8, -4, -10, 7]   // [-10, -2, -10, 7 ]

console.log(collisions(asteroids1))
console.log(collisions(asteroids2))
console.log(collisions(asteroids3))
console.log(collisions(asteroids4))
console.log(collisions(asteroids5))
