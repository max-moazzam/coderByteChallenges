//Function takes in a string parameter of numbers and returns it formatted with hyphens between odd numbers
//For instance '99675886' is returned as '9-967-5886'

function DashInsert(str) {
  str = str.split('');					//String is split into its constituent elements
  
/*
	Loop goes through each element in the string, converts it to a Number, and if both the currently examined number,
	and the previous number are both odd (if divded by 2 there is a remainder), then the previous element is replaced
	with the previous element plus a '-'
*/

  for (i=0; i < str.length; i++) {
    if (Number(str[i-1]) % 2 !== 0 && Number(str[i]) % 2 !== 0) {
      str[i-1] = str[i-1] + '-';
    }
  }

  return str.join('')					//The elements of the string are then joined together again and returned   
}