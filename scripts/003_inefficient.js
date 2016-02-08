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
    
    console.log("Testing " + number + " " + "to find the biggest prime factor....");
    
    var biggestPrimeFactor = 2;
    var i=1;
    
    while (i < number) {              
        
        i+=2;
        if (number%i===0&&checkPrime(i)) {
            console.log(biggestPrimeFactor);
            biggestPrimeFactor = i;
            
        }
    }
    
    
}


