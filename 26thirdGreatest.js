//Function takes in a string array parameter of a list of words, and then returns the third greatest word in the list (by character #)
//If the third greatest word is tied with one or more other words, then the last word in the list is returned

function ThirdGreatest(strArr) { 

//Find the lengths of the strings
  var stringLengths = [];
  for (i=0; i < strArr.length; i++) {									//Loop goes through each element in the string returning the lengths into a new array
      stringLengths[i] = strArr[i].length;
  }

  var unsortedLengths = stringLengths.slice(0);							//A clone of stringLengths is made so that stringLengths can be sorted

//Sort the lengths
  var sortedLengths = stringLengths.sort(function(a, b) {				//Array of stringLengths is then sorted into ascending order
    return a - b;
  })

//Find the third greatest
  var thirdGreatestSize = sortedLengths[sortedLengths.length - 3];		//The third greatest string length will be third from the last in the array

//Match the lengths with the original lengths array to find the index
  for (i=0; i < sortedLengths.length; i++) {							//The loop will then go through the unsorted string lengths array
	  if (unsortedLengths[i] === thirdGreatestSize) {					//If a match is made with the greatest size then the index of it is stored
	    var indexOfThird = i;
	  }
  }

//Use the found index to return the correct word
  return strArr[indexOfThird]
}
   