//Input: flight length (flightLength), array of movie lengths (movieLength)
//Output: if two movies add up to flightLength


const movieFlights = (flightLength, movies) => {
    let results = {}

    for (let i = 0; i < movies.length; i++) {
        if (results[movies[i]]) {
            return console.log(true)
        }
        let result = flightLength - movies[i]
        results[result] = true
    }
    return console.log(false)

}
movieFlights(160, [80, 110, 40])
movieFlights(160, [80, 110, 80])
movieFlights(160, [20, 30, 110, 40, 50])

