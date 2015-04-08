//Function inputs an array, then checks to see if the numbers in the array can be summed to the largest number
//I decided to extensively comment this to illustrate my thought process
//This was a tricky challenge, in order to find all possible combinations of numbers to add I came up with this method:
//A number to be added can be present or absent (2 choices), in other words, True or False
//By finding all the possible ways a number is present or absent, all different combinations of sums can be made

function arrayAdditionI(arr) {

//Will sort the numbers of the array in ascending order 
    arr.sort(function compareNumbers(a, b) {
      return a - b;
    });

//Largest number and number of elements are stored, array declared to access combinations of choices
    var largestNumber = arr.pop();
    var numberOfElements = arr.length;   
    var combinationChoices = [];

//All possible true (1) and false (0) combinations are made based on the amount of elements in the array
//There are two choices we can choose from for each element, True (1) or False (0)
//2 choices ^ number of elements
//If there are 2 elements, for instance, there will be four possible combinations (2^2):
//1. [False,False] 2. [False, True] 3. [True, False] 4. [True, True]
//These can correspond to binary numbers:
//0: (00) 1: (01) 2: (10) 3: (11)
//We make a true if the last digit is 1 (..01) (&1)
//Then shift it once to the right and match again
//For instance (10) will become [False(0), True(1)]
//Each time a new element is added the number of columns used in binary is increased by 1 (2 more choices, i.e. another 0 and 1)
//For instance 2 elements require 2 columns, 3 elements require 3
//Each time a new column is added a shift must be made to the right to examine the new column
//Aside: Why not just use binary numbers? Using toString(2) will lead to a cut off of the preceding zeroes
//This makes it difficult to record the correct number of falses

    for(binNumber=0; binNumber<Math.pow(2,numberOfElements); binNumber++) {
      var possibleCombinations = [];
        for(shift=0; shift < numberOfElements; shift++){
          if((binNumber >> shift) & 1) {
            possibleCombinations.push(1);                                   //If a true or 1 is found then 1 is pushed
          }
          else {
            possibleCombinations.push(0);
          }
        }
      combinationChoices.push(possibleCombinations);                        //This new set of combinations is then pushed to the overall choice array
    }


//Declare an array to access all possible summations
    var sum =[];

//Loop will match a possible combination choice (such as True True) with the array of numbers
//Everytime there is a true, we add the corresponding number
//For instance if our array is [5,10,15] and the current combination choice being examined is [110] or [True True False]:
//Then 5 and 10 are added, as they are True, but 15 is not, as it is False
//Since we found all possible binary combinations previously, all possible different summation combinations are made
//These combinations can be accessed with the sum variable

    for (i=0; i < combinationChoices.length; i++) {                         //Will loop through the combination choices
      currentChoice = combinationChoices[i];
      sum[i] = 0;                                                           //Declares an original total
        for (j=0; j< currentChoice.length; j++) {                           //Loops through the current choice
          if (currentChoice[j] == 1) {
            sum[i] += arr[j];                                               //If true, then corresponding array value is added
          }
        }
    }

//A loop then checks to see if a summation made from a possible combination matches the largest number 
    for (i=0; i <= sum.length; i++) {
        if (sum[i]===largestNumber) {                                       //It returns true if it does
            return true
        }
        if (i===sum.length) {                                               //If the loop is exhausted, then false is returned
            return false
        }
    }
}                  
