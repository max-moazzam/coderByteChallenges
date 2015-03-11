//Function that takes in a string parameter str and returns that same string with every word capitalize

function LetterCapitalize(str) { 
    var newStr = []; //Declares a new array for the new string
	for (i=0; i < str.length; i++) { //For loop that starts at 0, goes up by 1, and ends at the length of the entire parameter
	    newStr[i]=str[i]; //Copies the old string into the new string
	    
    	if (str[i-1] == ' ' || str[i-1] == null) { //If statement where if a space behind a character is a space or nothing (if it's the first word) then that character will be capitalized
    	    newStr[i] = str[i].toUpperCase();
    	}
        
	}
   return newStr.join("");  //Joins together the substrings of the new array into one string and returns it
   
}
