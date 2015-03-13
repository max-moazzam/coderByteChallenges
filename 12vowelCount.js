//Function that takes in a string parameter str and returns the number of vowels in that string. The function is case insensitive.

function VowelCount(str) { 
	var vowels = 'aeiou';				//Creates a variable with a list of vowels
	str = str.toLowerCase();			//Makes everything in string lowercase to make function case insensitive
	var totalVowels = 0;				//Variable declared for the total number of vowels in the string

	for (i=0; i < str.length; i++) {		//For loop which will go through every letter of the inputted string 
    		for (j=0; j<vowels.length; j++) {	//For loop which will go through every letter in the vowels variable
        		if (str[i] == vowels[j]) {	//If a match is made between a letter in the string and a letter in the vowel, 1 is added to totalVowels
            		totalVowels += 1;
        		}
    		}
	}
  	return totalVowels;
}
