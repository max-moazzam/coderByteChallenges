//Function created to reverse a inputed string with parameter str

function FirstReverse(str) {
  	var reverseArray = []; //Creates a new array for the reverse characters to be inputed in
  	for (j=str.length - 1, i=0; j>=0, i<str.length; j--, i++) { //For loop that starts at the last index of str and sets the first index of reverseArray equal to it (i.e. Str[3] becomes reverseArray[0]
       reverseArray[i] = str[j];
      };

var reverseString = reverseArray.join(""); //Joins characters in the array together into one string rather than separated (i.e. 'C','A','T' = 'CAT')
  return reverseString; 
         
} 

FirstReverse(readline()); //Calls the function          
