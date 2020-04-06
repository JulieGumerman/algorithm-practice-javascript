const averagePair = (arr, num) => {
    let start = 0;
    let end = arr.length -1;

    //while start is still less than end
    while (start < end) {
        //let's boop about finding the average, so start with the average itself
        let avg = (arr[start] + arr[end]) / 2
        //WHEN AND IF YOU GET THE AVG TO EQUAL THE NUM, THIS RETURN STATEMENT SENDS YOU BACK
        if (avg === num) return true;
        //if your avg is lower than the target avg, bump your start up a bit to raise it
        else if(avg < num) start++
        //if avg is higher, start moving backwards through the array to get you a lower average
        else end --
        //if start equals end, it'll automatically boot you out of this while loop...
    }
    //...and you end up here
    return false

}

averagePair([1, 2, 3], 2.5) //true
averagePair([1, 2, 3, 4, 5, 6, 7, 10, 12, 19], 8) //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
averagePair([], 4) //false