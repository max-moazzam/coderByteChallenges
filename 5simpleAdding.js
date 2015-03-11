//Function that takes in a number parameter, num, and adds up all the numbers up to and including that number (i.e. num = 3 ....3+2+1+0)

function SimpleAdding(num) { 
  	var total = 0; //Establishes the variable total at 0
	for (i=0; i <= num; i++) { //For loop which starts at 0 and ends when i is greater than the num paramter, i increases by 1
    total += i; //Each i will be added into the total
	};
  return total; //Total is returned    
}
