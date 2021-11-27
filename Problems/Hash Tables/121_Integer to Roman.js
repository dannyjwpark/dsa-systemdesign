/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
// I             1
// IV            4    
// V             5
// IX            9
// X             10
// L             50
// LVIII         58    
// C             100
// D             500
// M             1000
// MCMXCIV       1994
    let romans = {1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M"};
    if(romans[num] !== undefined) return romans[num];
    
//     find out how many powers to ten a number is
    let tens = 0;
    let temp_num = num;
    while(temp_num / 10 > 1){
        tens ++;
        temp_num /= 10;
    }
    
//     list of romans to be used
    let ones = ["I", "X", "C", "M"];
    let fives = ["V", "L", "D"];

// declare a variable that stores reversed num in string format
    let num_str = String(num).split('');
    let num_str_rev = "";
    for(let i=num_str.length-1; i>=0; i--){
        num_str_rev+=num_str[i];
    }
    
    let output = [];
    for(let i=0; i<=tens; i++){
//         4
        if(parseInt(num_str_rev[i]) +1 === 5){
            console.log(1);
            output.push(ones[i] + fives[i])
        }
//         9
        else if (parseInt(num_str_rev[i]) +1 === 10){
            console.log(2);
            output.push(ones[i] + ones[i+1])
        } 
//         5
        else if (parseInt(num_str_rev[i]) === 5){
            console.log(3);
            output.push(fives[i])
        }
//         6-8
        else if (parseInt(num_str_rev[i]) / 5 > 1){
            console.log(4);
            let num_ones = num_str_rev[i] % 5;
            output.push(fives[i] + ones[i].repeat(num_ones))
        } 
//         0-3
        else {
            console.log(5);
            let num_ones = num_str_rev[i] % 5;
            output.push(ones[i].repeat(num_ones))
        }
    }
    
    let final_output = "";
    
    for(let i=output.length-1; i>=0; i--){
        final_output+= output[i];
    }
    
    return final_output;
    
};