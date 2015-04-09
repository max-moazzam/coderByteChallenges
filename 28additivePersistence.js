//Function that takes in a number parameter and returns the additive persistence of that number
//Additive persistence is the amount of times all digits in a number must be added, and its subsequent sums be added, until one digit is reached
//For instance the number 2879 has an additive persitence of 2:
//(1:) 2+8+7+9 = 26 (2:) 2+6 = 8 ; stop at 8 since it is one digit
//Function is recursive

function AdditivePersistence(number, persistenceCount) { 
  if(persistenceCount === undefined) {                 //By keeping persistence count as a parameter, it can keep an ongoing count while being used recursively
     persistenceCount = 0;
     }
    
  number = number.toString();                          //Number is converted into a string so its length can be analyzed   
  if (number.length === 1) {                           //If the number is just one digit then we return the count
    return persistenceCount;
  }

  else {                                               //If the number is not one digit, then first we increase the count by one
    persistenceCount ++
    number = number.split('');                         //Then the number is split into its constituent digits
      
    var sum = 0;
    for (i=0; i < number.length; i++) {                //Loop goes through each digit and adds it to a sum after being converted from a string to a number
      number[i] = Number(number[i]);
      sum = number[i] + sum;
    }
      
    return AdditivePersistence(sum, persistenceCount) //The function is recursively run again until there is only one digit
  }
}