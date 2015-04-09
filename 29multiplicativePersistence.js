//Function that takes in a number parameter and returns the multiplicative persistence of that number
//Multiplicative persistence is the amount of times all digits in a number must be multiplied, and its subsequent products be multiplied, until one digit is left
//For instance the number 2879 has a multiplactive persitence of 2:
//(1:) 2*8*7*9 = 1008 (2:) 1*0*0*8 = 0 ; stop at 0 since it is one digit
//Function is recursive

function MultiplicativePersistence(num, persistenceCount) { 
  if (persistenceCount === undefined) {                  //By keeping persistence count as a parameter, it can keep an ongoing count while being used recursively
    persistenceCount = 0;
  }
  
  num = num.toString();                                  //Number is converted into a string so its length can be analyzed
  
  if (num.length === 1) {                                //If the number is just one digit then the count is returned
    return persistenceCount
  }
  
  else {
      num = num.split('');                               //The number is split into its constituent digits
      persistenceCount ++;                               //If the number is not one digit, then the count is increased by one
      var product = 1;
      for (i=0; i < num.length; i++) {                   //Loop will go through each digit multiplying it to the total product one by one
        product = num[i] * product;
      }
      return MultiplicativePersistence(product, persistenceCount)   //The function then proceeds recursively until there is only one digit left
  }
}