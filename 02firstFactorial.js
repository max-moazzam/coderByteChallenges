//Function that finds the factorial of a parameter num

function FirstFactorial(num) { 
	var total = 1; //total variable declared to store the total
  	for (i=num; i>0; i--) { //for loop which multiplies the total by a descending number(i.e. 4*3=12, 12*2=24, 24*1=24)
      total *= i;
    };
  return total;          
}
