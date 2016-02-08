function checkPrime(n) {
    
    if (n%2!==0) {
        
        for (var i=3; i<n; i+=2) {
            if (n%i===0) {return false;}
        } 
    }
    
    else {return false;}
        
    return true;
}
     

function findBPFactor(number) {
    
    var biggestPrimeFactor = 2;
    
    for (i=2; i<number; i++ ) {              
        
        if (number%i===0&&checkPrime(i)) {
            console.log(biggestPrimeFactor);
            biggestPrimeFactor = i;
            
        }
    }
    return biggestPrimeFactor;

}

console.log("Biggest Prime Factor of is: " + findBPFactor(13195));