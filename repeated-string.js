const repeatedString = (s, n) => {
    //make sure you are dealing with the proper # of chars in the string
    //snag # of a's


    let remainder = n % s.length

    let infiniteArray = s.split("")
    let finiteArray = infiniteArray + "," + infiniteArray.slice(0, remainder)
    console.log(finiteArray)

    let counter = 0;

    for (let i = 0; i < finiteArray.length; i++) {
        if (finiteArray[i] === "a") {
            counter += 1
            console.log(counter, infiniteArray[i])
        }
    }
    return counter

}

repeatedString("aba", 5)