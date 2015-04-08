//Function that takes in a string parameter of two times and returns the number of minutes between the two times
//Times are formatted as Hour, then Minutes, then AM or PM (case does not matter) then a hyphen for the next time
//An example would be '9:00am-12:37pm'
//Time is assessed as a function of minutes, in other words 12:00am is 0 and 1:00am is 60
//First the times are converted into total minutes since minutes 0 (12:00am)
//Then time2 is subtracted from time 1
//If Time2 is earlier than Time1 then the resulting minutes will be negative
//To correct this if the amount of minutes is negative, 24 hours is added to account for time moving forward rather than backwards

function CountingMinutesI(str) { 
  str = str.toLowerCase();							//Lowercases the string so that if AM or am is inputted both are accepted
  var times = str.split('-');						//Splits the time into two different elements

//The first time is dealt with first
  var time1 = times[0].split(':');					//Hours are split off
  var time1Hours = time1[0];

  var time1MinutesAMPM = time1[1];					//AMPM is split off from the minutes
  var time1AMPM = time1MinutesAMPM.slice(2);
  var time1Minutes = time1MinutesAMPM.slice(0,2);
  time1Minutes = Number(time1Minutes);				//Minutes string converted into a number

  var pmMinutesTime1 = 0;							//If the time is a PM then 12*60 minutes is added (12 hours away from 12:00am which is minute 0)
  if (time1AMPM === 'pm') {
      pmMinutesTime1 = 12*60;
  }

  var hourMinutesTime1 = time1Hours * 60;			//Hours are converted to minutes

  var totalMinutesTime1 = hourMinutesTime1 + time1Minutes + pmMinutesTime1;	//The total minutes for the first time is found

//The same process is down identically for the second time
  var time2 = times[1].split(':');
  var time2Hours = time2[0];

  var time2MinutesAMPM = time2[1];
  var time2AMPM = time2MinutesAMPM.slice(2);
  var time2Minutes = time2MinutesAMPM.slice(0,2);
  time2Minutes = Number(time2Minutes);

  var pmMinutesTime2 = 0;
  if (time2AMPM === 'pm') {
      pmMinutesTime2 = 12*60;
  }

  var hourMinutesTime2 = time2Hours * 60;

  var totalMinutesTime2 = hourMinutesTime2 + time2Minutes + pmMinutesTime2;

//The total amount of minutes from time 2 is then subtracted from time1 to find the total elapsed minutes
  var overallMinutesSpent = totalMinutesTime2 - totalMinutesTime1;

//If Time2 is earlier than Time1 a negative number results
//Since time cannot move backwards the negative number is factored into the 24 hour day
//For instance 9:00am-8:00am would be -60, however since time cannot go backward, we must move forward in the clock
//Which results in -60 + 24(hours)*60(minutes/hour)
  if (overallMinutesSpent < 0) {
    overallMinutesSpent = overallMinutesSpent + (24*60);
  }
  
  return overallMinutesSpent;         
}