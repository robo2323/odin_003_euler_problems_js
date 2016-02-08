var fibsEven = function() 	{
	
	var lastFib = 0;
	var midFib = 1;
	var nextFib = 0;
	var sum = 0;

	while (nextFib<=4000000)	{

	    nextFib=lastFib+midFib;
	    lastFib=midFib;
	    midFib=nextFib;
	    
	    if (nextFib%2===0) 	{

	    	console.log("n"+nextFib);
	        
	        sum+=nextFib; 
	        console.log("s"+sum);
	    }
	    
	var result002 = document.getElementById("result002");
	result002.innerHTML = sum;
	
	}
};