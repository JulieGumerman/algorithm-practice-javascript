const countingValleys = (n, s) => {
    //n is number of steps
    //s = an array of steps uphill or downhill

    //Matt starts at sea level
    //each "D" or "U" is one unit of altitude change
    //mountain: steps above sea level that come down to sea level
    //valley: goes below sea level and comes back up
    
    //Attempt #1: Try using an "if/else", "U" adds one, "D" subtracts one
        //every time you go get a "U" and hit sea level, you add to counter "total valleys"

    let trail = 0
    let valleyTalley = 0

    for (let i = 0; i < s.length; i++) {
        let step = s[i]

        if (step === "U") {
            trail += 1
            if (trail === 0) {
                valleyTalley += 1
            }            
        } else {
            trail -= 1
        }
    }

    return console.log(valleyTalley)
}

countingValleys(8, ["U", "D", "D", "D","U","D", "U", "U"])