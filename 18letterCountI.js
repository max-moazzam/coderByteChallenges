//Function takes in a string parameter and will return the first word with the largest number of repeated letters
//Assumes that there are only words in the string, and that there are spaces between words
//Will return any attached punctuation with the word, and returns -1 if there are none with repeating letters

function LetterCountI(str) { 
  str = str.toLowerCase();                      //String converted to lowercase to avoid sorting errors
  str = str.split(' ');                         //String split into separate words

  var letterCount = [];                         //Array for the amount of repeated letters is declared
  
  for (j=0; j < str.length; j++) {              //Loop will go through each word of the string
    var currentWord = str[j];                   //Temporary variable declared to access the current examined word
    letterCount[j] = 0;                         //Original count starts at 0
    currentWord = currentWord.split('');        //Current word split into individual letters
    currentWord.sort();                         //Letters are sorted alphabetically

    for (i=0; i < currentWord.length; i++) {    //Loop will examine if the letter in front is the same as the letter behind (to find repeated letters)
      if (currentWord[i]===currentWord[i+1]) {
          letterCount[j] += 1                   //If a match is made, 1 is added to the letterCount at an index corresponding to the words index in the string
      }
    }
  }

  var largestCount = 0;
  var indexOfLargestCount = 0;

  for (i=0; i < letterCount.length; i++) {      //Loop will go through the letterCount array to find the largest amount of repeated letters
      if (largestCount < letterCount[i]) {
      largestCount = letterCount[i];
      indexOfLargestCount = i;                  //Sets the index of the largest amount
      }
  }

  if (largestCount === 0) {                     //If the largest count is 0 (no repeated letters), then -1 is returned
      return -1
  }
  else if (largestCount > 0) {                  //Index of the largest amount is used to find the word with the most repeated letters in the string
      return str[indexOfLargestCount]
  }         
}