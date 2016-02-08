var checkPrime = function(n)    {
    
    if (n%2!==0) {
        
        for (var i=3; i<n; i+=2)    {
            if (n%i===0) {return false;}
        }
    }
    
    else {return false;}
        
    return true;
};
     

var findBPFactor = function(number) {
    
    var output = document.getElementById("output");
    
    var biggestPrimeFactor = 2;
    var i=1;
    
    /*checking for factors only up to the square root of the number.*/ 
    /*This dramatically reduces the resources and time required for the computation. Whilst this method works for this particualr euler problem it can fail for certain numbers so isn't fool proof*/
    
    while (i < Math.sqrt(number))   {              
        
        i+=2;
        if (number%i===0&&checkPrime(i)) {
            console.log(biggestPrimeFactor);
            biggestPrimeFactor = i;
            
        }
    }
    
    var result003 = document.getElementById("result003");
    result003.innerHTML = biggestPrimeFactor;
};
