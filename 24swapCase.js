//Function that takes in a string parameter and return a string with the cases flipped (i.e. lowercase becomes uppercase)

function SwapCase(str) { 
  str = str.split('');                              //String is split into indvidual elements
  var lowerCases = 'abcdefghijklmnopqrstuvwxyz';    //Variables to access both lower and uppercases are declared
  var upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (i=0; i < str.length; i++) {                  //Loop will go through each element of the string
    for (j=0; j < lowerCases.length; j++) {         //Loop will go through each element of the lower and uppercase alphabet for each string element
      if (str[i]===lowerCases[j]) {                 //If a lowercase match is made then it is converted to uppeCase
          str[i] = str[i].toUpperCase();
      }
      else if (str[i] === upperCases[j]) {          //If an uppercase match is made then it is converted to lowerCase
          str[i] = str[i].toLowerCase();
      }
    }
  }
  return str.join('')                               //The individual elements are joined together in a string and returned
}