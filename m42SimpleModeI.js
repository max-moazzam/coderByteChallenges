//Function that takes in an array parameter and returns the mode
//If there are more than one mode then the function will return the first mode found

function SimpleMode(arr) { 
  var repeatCount = [];                       //Array for keep track of the amount of number repeats is declared
  for (j=0; j < arr.length; j++) {            //The first loop goes through each number one at a time
  repeatCount[j] = -1;                        //The count starts at -1, because the number will count itself as a match
    for (i=0; i < arr.length; i++) {          //That individual number is then matched against every number in the array with another loop
      if (arr[j] === arr[i]) {
          repeatCount[j] += 1;                //If a match is made the count is increased so that an array of counts is made
      }
    }
  }

  var largestRepeat = 0;                      //Variable to access the largest repeat is declared

  for (i=0; i < repeatCount.length; i++) {    //Loop will check entire count array to find what the largest repeat was and the index of that repeat
      if (largestRepeat < repeatCount[i]) {
        largestRepeat = repeatCount[i];
        var indexOfLargestRepeat = i;
      }
  }
  
  if (largestRepeat === 0) {                  //If there are no repeats then -1 is returned
    return -1
  }
  else if (largestRepeat > 0) {               //If there is a repeat then the index of the largest repeat will be used to find the number in the original array
    return arr[indexOfLargestRepeat]
  }
}

