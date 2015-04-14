//Function takes in an array parameter and returns 1 if the mean and the mode are equal to each other
//The function assumes that there is only one mode at most
//If there is no mode, or if the mode does not equal the mean then the funciton returns 0

function MeanMode(arr) {
    //Find mean
    var sum = 0;
    
    for (i=0; i< arr.length; i++) {                     //Loop sums up all the elements in the array
        sum = sum + arr[i];
    }
    
    var mean = sum / arr.length;                        //Loop then divides the sum by the number of elements to get the mean
    
    //Find mode
    
    var modeCount = [];
    
    for (i=0; i < arr.length; i++) {                    //Loop goes through the array, while another loop goes through the array
        modeCount[i] = -1;                              //Starts at -1 to factor in an element matching with itself
        for (j=0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                modeCount[i]++;                         //If a match is made then the modeCount is increased by one
            }
        }
    }
    
    var largestCountNumber = 0;
    var indexOfLargest = 0;
    
    for (i=0; i < arr.length; i++) {                    //Loop goes through the modeCount array to find the index of the largest count
        if (largestCountNumber < modeCount[i]) {
            largestCountNumber = modeCount[i];
            indexOfLargest = i;
        }
    }
    
    if (largestCountNumber === 0) {                     //If the largest count is 0 then there is no mode, 0 is returned
        return 0
    }
    
    mode = arr[indexOfLargest];                         //The mode is found by inputting the index of the largest count into the original array
    
    if (mean === mode) {                                //If the mean is equal to the mode then 1 is returned
        return 1
    }
    
    else {                                              //Otherwise 0 is returned
        return 0
    }
}