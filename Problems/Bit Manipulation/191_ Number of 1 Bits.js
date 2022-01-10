var hammingWeight = function(n) {
    let str = n.toString(10);

    function dec2bin(dec){
        return (dec >>> 0).toString(2)
    }

    let binary = String(dec2bin(parseInt(str)));

    console.log(binary)
    let count = 0;

    for(let i=0; i<binary.length; i++){
        if(parseInt(binary[i]) - 1 === 0) count ++;
    }
    return count; 
};