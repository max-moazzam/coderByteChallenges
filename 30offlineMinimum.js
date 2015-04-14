//Function takes in a string parameter and returns the smallest number so far everytime an 'E' appears
//Input must have each element in an array as a string separately
//Output returns an array with one element, with the numbers separated by a comma
//For instance the input ['1', '5', '3', 'E', 'E', '2', '1', 'E', '0', '2'] returns ['1,3,1']

function OffLineMinimum(strArr) {
  var numberArray = [];                             //Array for the numbers so far in the array
  var resultArray =[];                              //Array for the smallest numbers everytime 'E' is encountered

  for (i=0; i < strArr.length; i++) {               //Loop goes through each element of the array
    if (strArr[i] === 'E') {                        //If 'E' present then the first number in the numberArray (which will be the lowest) is pushed
        resultArray.push(numberArray.shift());
    }
    
    else {
      numberArray.push(Number(strArr[i]));          //Otherwise, that number is stored in a temporary array, numberArray (after being converted to a Number)
      for (j=0; j < numberArray.length;) {          //The loop then goes through the array to sort it so that the lowest number is first
        if (numberArray[j] > numberArray[j+1]) {    //If the first number is larger than the next number then the numbers are switched
            var largerNumber = numberArray[j];
            numberArray[j] = numberArray[j+1];
            numberArray[j+1] = largerNumber;
            j = 0;                                  //And the loop starts again until all the numbers are in ascending order
        }
        else {
            j++;
        }
      }
    }
  }
return resultArray.join(',')                        //resultArray is then returned with the elements joined together with a comma separating them
}