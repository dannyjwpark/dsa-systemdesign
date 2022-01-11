var maxPower = function(s) {
    let maxpower=1;
    let power = 1;
    let strings = s.split('');
    let substr = strings.pop();
    while(strings.length){
        let string = strings.pop();
        if(substr === string){
            power ++;
        } else {
            substr = string;
            maxpower = Math.max(maxpower, power);
            power = 1;
        }
    }
    
    maxpower = Math.max(maxpower, power)
    return maxpower
};