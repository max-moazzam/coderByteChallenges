//Function that divides a first number parameter, by a second, and then returns a number in a string comma format

function DivisionStringified(num1,num2) { 
  var result = num1 / num2;								//First the two numbers are divided
  roundedResult = Math.round(result);					//The result is rounded to the nearest integer
  stringResult = String(roundedResult);					//Convered into a string
  stringResult = stringResult.split('');				//String split into individual elements
  for (i = stringResult.length - 3; i > 0; i -= 3) {	//Loops through starting at the end, adding a comma every 3 elements
    stringResult[i] =  ',' + stringResult[i];
  } 
  return stringResult.join('')							//Elements returned into one string and then returned
}