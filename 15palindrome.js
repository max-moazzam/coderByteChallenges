//Function that takes in a string parameter str and returns true if it is a palindrome (i.e. same frontwards and back).
//Function is case sensitive, but spaces do not matter.

function Palindrome(str) { 
  str = str.replace(/\s+/g, '');				//Removes all spaces within the inputted string so that spaces are not important
  var reverseStr = [];						//Array declared for the reverse string

  for (i=str.length-1, j=0; i==0, j < str.length; i--, j++) {	//Double for loop, going down from the last letter of str to the first (i)
								//And going up from 0 to the last element of the string for the reverse string (j)
      reverseStr[j] = str[i];					//Creates a reverse string
  }

  if (reverseStr.join('') == str) {				//Joins together the reverse string and if it matches the original string then true
      return true;
  }
  else {
      return false;						//Otherwise false
  }
}
