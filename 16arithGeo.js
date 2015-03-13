//Function that takes in an array parameter and returns if the sequence is Arithmetic, Geometric, or neither (-1)
//Function assumes no zeroes and at least 3 numbers, negative numbers may be used, and no array contains the same elements (i.e. [1,1,1,1])

function ArithGeo(arr) {
  var sequenceName = [];				 //Variable to store the sequence name is declared	
  for (i=0; i < arr.length-2; i++) {			 //For loop which will go through every element in a sequence, until the 2nd to last one
    if (arr[i+1] - arr[i] == arr[i+2] - arr[i+1]) {	 //If the difference between an element and the next is equal to the diff between 2 elements ahead and the next element...
      sequenceName = 'Arithmetic';			 //...then the sequence is arithmetic
    }
    else if (arr[i+1] / arr[i] == arr[i+2] / arr[i+1]) { //If the quotient between an element and the next is equal to the quotient between 2 elements ahead and the next element...
      sequenceName = 'Geometric';			 //Then the sequence is geometric
    }
    else {
      i=arr.length;					 //If one instance is found in the array that does not fit these cases then the sequence is neither and the loop is stopped
      sequenceName = '-1';
    }
  }
  return sequenceName;
}
