//Function that takes in a string as a parameter, alphabetizes that string, and returns the sorted string

//Limitations and Suggestions for improvement: Can only accept a word at a time, cannot sort capitals in proper locations (puts them at beginning), assumes no punctuation, assumes no numbers

function AlphabetSoup(str) { 
	var splitStr = str.split('');		//Splits the entered string into indvidual letter substrings
	var sortStr = splitStr.sort();		//Sorts the substrings alphabetically
  	
	return sortStr.join('');         	//Joins the substrings together back into a string
}
