//Function that takes in a string parameter and returns true if a and b are exactly 3 spaces away from each other (not inclusive) at least once in the string

function ABCheck(str) { 
    var result = [];		//Declares a variable titled result which will hold the truth value
    str=str.toLowerCase();	//Makes it irrelevant whether the a or b are lower or upper case (i.e. program becomes case insensitive)
	for (i=0; i < str.length; i++) {	//For loop will check through each element of the string until a match is found
		if (str[i] == 'a' && (str[i-4] == 'b' || str[i+4] == 'b')) {	//Match if a is found and b is found either 3 spaces before or after (or both)
        	i = str.length;	//Stops the loop to prevent unnecessary cycles
        	result = true;
        }
      	else if (str[i] == 'b' && (str[i-4] == 'a' || str[i+4] == 'a')) {	//Match if b is found and a is found either 3 spaces before or after (or both)
        	i = str.length;	//Stops the loop to prevent unnecessary cycles
        	result = true;
        }
        else {			//If no match is found than the result will be false
            result = false;
        }
	}    
    return result;
}
