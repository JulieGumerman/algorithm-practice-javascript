//Input: flight length (flightLength), array of movie lengths (movieLength)
//Output: if two movies add up to flightLength


const movieFlights = (flightLength, movies) => {
    let results = {}

    for (let i = 0; i < movies.length; i++) {
        /* 
            THIS FIRST PART CHECKS TO SEE IF "TRUE" IS POSSIBLE:
                1. movie lengths that would make this be "true" are recorded in the dictionary
                2. If the number from the movies array is already in the dictionary,
                    this means that another movie length that would return a "true
                    is already in the dictionary
                3. If so, game over, return a true.
        */
        if (results[movies[i]]) {
            return console.log(true)
        }
        /*   
        THIS SECOND PART ACTUALLY HAPPENS BEFORE THE IF CLAUSE:
            1. Start logging movie times in results dictionary
            2. Record the length you would need to equal the flight length
            3. results[result] = true is a placeholder in the dictionary. "True" could be anything
        
        */
        let result = flightLength - movies[i]
        results[result] = true
    }
    /* 
        If conditions that would make this "true" are not in the dictionary
        by the time the for loop has cycled through the last # in the array,
        you exit the "for" loop and end up here
    */
    return console.log(false)

}
movieFlights(160, [80, 110, 40])
movieFlights(160, [80, 110, 80])
movieFlights(160, [20, 30, 110, 40, 50])

