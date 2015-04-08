//Function takes in an array parameter and then returns the second lowest and second greatest number respectively

function SecondGreatLow(arr) { 
  arr.sort(function compareNumbers(a,b) {   //Sorts numbers in ascending order
      return a-b;
  })

  var result = [];                          //Array to access function result is declared

  if (arr.length === 2) {                   //If there are only 2 numbers then
      result[0] = arr[1];                   //The biggest number is the second lowest
      result[1] = arr[0];                   //And the smallest number is the second greatest
  }

  if (arr.length > 2) {                     //If there are more than 2 numbers then
      result[0] = arr[1];                   //The second lowest is the second number in the sorted array
      result[1] = arr[arr.length-2];        //And the second greatest is second from the end in the sorted array
  }    
  return result[0] + ' ' + result[1]        //The result is then returned with a space between the two numbers
} 