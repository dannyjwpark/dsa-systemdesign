/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s.replace(/\s/g, '');
    
    let stack = [];
    let prevSign = '+';
    let num = '';
    
    for (let i = 0; i < s.length; i++) {
        //If it is a number
        if (!isNaN(s[i])) num += s[i]
        
        if (isNaN(s[i]) || i === s.length - 1) {
        //We don't operate on '+' and '-' since '*' and '/' take priority
            if (prevSign === '+') stack.push(Number(num))
            else if (prevSign === '-') stack.push(Number(-num))
            else if (prevSign === '*') stack.push(Number(num) * stack.pop())
            else if (prevSign === '/') stack.push(Math.trunc(stack.pop() / Number(num)))
    
            prevSign = s[i]
            num = ''
        }
    }
    
    console.log(stack)
    
    return stack.reduce((a,b) => a+b)
    
    
};