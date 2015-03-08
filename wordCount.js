//Function that takes in a string and returns a word count

function WordCount(str) { 
	var subString=str.split(" "); //splits string into substrings between spspaces
  	var wordCount=subString.length; //counts the length of the array of substrings, or in other words the amount of substrings or words
  return wordCount;       
}
