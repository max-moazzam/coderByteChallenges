//Function takes in a string parameter of numbers and letters and returns the sum of the numbers between the letters
//Numbers that are together will be considered one number
//For instance an input of "88Hello 3World!" results in an output of 91 (88+3)

function NumberAddition(str) { 
  var numbers = '0123456789';                               //All possible digits are represented by the numbers variable
  var numbersToAdd = [];                                    //Array created for numbers to add
  var sum = 0;                                              //Variable created for the continuing sum

  for (i=0; i <= str.length; i++) {                         //Loop will go through parameter array
    for (j=0; j <= numbers.length; j++) {                   //Loop will go through numbers array
      if (str[i] === numbers[j]) {                          //If a digit match is made then the number is pushed into the numbers to add array
          numbersToAdd.push(str[i]);
          j = numbers.length + 1;                           //The loop is stopped
       }
      else if (j === numbers.length || i === str.length) {  //Otherwise if the loop reaches the end with no stops
          numbersToAdd = Number(numbersToAdd.join(''));     //Then all the numbers in the numbers to add array are joined together to form one number
          sum = numbersToAdd + sum;                         //And added to a contiuning sum
          numbersToAdd = [];                                //The numbers to add array is then cleared to make way for the next set of digits
      }
    }
  }
  return sum                                                //At the end the contiuning sum is returned
}