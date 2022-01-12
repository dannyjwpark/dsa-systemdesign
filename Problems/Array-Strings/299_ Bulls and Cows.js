var getHint = function(secret, guess) {
    let bulls = 0, cows = 0;
    let original = secret;
    for(let i=0; i<secret.length; i++){
        if(secret[i] === guess[i]) {
            bulls++;
            idx = original.indexOf(guess[i]);
            original = original.slice(0, idx) + original.slice(idx+1);
        }
    }
    for(let i=0; i<secret.length; i++){
        console.log(original)
        if(secret[i] !== guess[i] && original.includes(guess[i])){
            cows++;
            idx = original.indexOf(guess[i]);
            original = original.slice(0, idx ) + original.slice(idx+1)
        }
    }
    
    return `${bulls}A${cows}B`;
};