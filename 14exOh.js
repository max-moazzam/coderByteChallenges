//Function that takes in an input of x's and o's and returns true if there is an equal amount of each (case sensitive)

function ExOh(str) { 
  var countX = 0;			//Declares variable for counting x's
  var countO = 0;			//Declares variable for counting o's

  for (i=0; i < str.length; i++) {	//For loop which will go through each element of the string
      if (str[i] == 'x') {		//If an x match is made, 1 will be added to countX
          countX += 1;
      }
      else if (str[i] == 'o') {		//If an o match is made, 1 will be added to countO
          countO += 1;
      }
  }

  if (countX == countO) {		//If countX is equal to countO, true will be returned
      return true;
  }
  else {				//If countX and countO are not equal, false is returned
      return false;
  }
}
