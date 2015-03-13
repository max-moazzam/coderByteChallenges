//Function that takes in a string as a parameter, and returns a string where each letter is moved forward by one (i.e. A to B), Z goes to A, also all vowels in the new string are capitalized, all spaces, punctuations, numbers, are preserved in the new string

function LetterChanges (str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'; //Creates a variable containing the entire alphabet
    var vowels = 'aeiou'; //Creates a variable containing all the vowels
    var letterChange = []; //New array created which will hold the new string
    
  	for (i=0; i < str.length; i++) { /*For loop which will loop the index of the entered string, 
the nested for loop will loop through the index of the alphabet variable, 
if a match is found the next letter (j+1) is entered into the new array
and j will be set to 27 to stop the loop,
 a special case will be made for alphabet[25] which is Z, which will then go back to A (alphabet[0]),
 if no match is found then the new array will simply be entered with the
 corresponding value (i.e. if str[5]= &, letterChange[5]= & */
    	for (j=0; j<27; j++) {
         	if (str[i]==alphabet[j]) {
            	letterChange[i]=alphabet[j+1];
            	j=27;
            }
            if (str[i]==alphabet[25]) {
                letterChange[i] = alphabet[0];
            }
            if (j==26) {
                letterChange[i] = str[i];
            }
    	}
         for (k=0; k < vowels.length; k++) { //For loop which will loop through the vowel variable to see if a match is made, if a match is made then it will be capitalized using the .toUpperCase method
             	if (letterChange[i] == vowels[k]) {
             	    letterChange[i]=vowels[k].toUpperCase();
            }
        }
    }
    return letterChange.join(""); //This method will join the substrings of the new array together into one array, the new array will then be returned
}

