//Function that takes in a number parameter and returns true if that number is a power of 2

function PowersofTwo(num) { 
  var twoPower = 0;
  var i=0;
  while (twoPower < num) {            //Increases the exponent by 1 until a match is made or the resulting exponentation is larger than the number inputted
      var twoPower = Math.pow(2,i)
      i++;
      if (twoPower === num) {         //If a match is made, the result becomes true and the loop is broken
          var result = true;
          break;
      }
      else {
          result = false;             //Otherwise the result is false
      }
  }
  return result         
}