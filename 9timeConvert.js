//Function that takes in a parameter num that is a given number of minutes and converts it into an hour and minutes format

function TimeConvert(num) { 
	var hour = Math.floor(num/60);		//Divides the entered number by 60 (60 minutes in an hour) and floors it to the lowest whole number to get the number of hours
	var minutes = num % 60;			//Finds the remainder left after divided by 60 to find the number of minutes
	if (minutes < 10) {			//NOTE: To pass the Coder Byte Challenge this if statement had to be omitted, however, I felt it improved the function so I added it in. If the number of minutes is less than 10 then a 0 is added to the tens place so that 9 minutes would be returned as 09 instead of 9
        	var minutes = '0'+minutes;
   	 }	
	return hour + ":" + minutes;        	//A colon is entered, format is Hour:Minutes 
}
