//Function that takes in a string parameter such as a sentence and returns the longest word in that sentence

function LongestWord(sen) { 
    sen = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""); //Replaces all punctuation in string with space
	var senWord = sen.split(" "); //Splits words in string into separate substrings and removes spaces
	var wordLength=[]; //Array created to store length of each substring
	var biggestNumber = 0; //The biggest substring length will be stored here
    var indexOfBigNumber; //Index of the biggest number in wordLength will be stored here
	
	for (i=0; i<senWord.length; i++) { //For loop which stores the length of the substrings into an array wordLength and then compares to see which substring has the biggest length
	    wordLength[i]=senWord[i].length;
	    if (wordLength[i] > biggestNumber) {
            biggestNumber = wordLength[i];
            indexOfBigNumber = i; // Index of whatever the largest number is will be stored here
	    }
	}
  
    sen=senWord[indexOfBigNumber]; //Index of the biggesst substring is used to access and return the correct substring
  return sen;         
}
