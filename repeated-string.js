const repeatedString = (s, n) => {


    let remainder = n % s.length
    let divided = Math.floor(n / s.length)
    console.log("DIVIDED", divided)


    

    let array = s.split("")
    let tinyArray = array.slice(0, remainder)


    let counter = 0;
    let microCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a") {
            counter += 1
            console.log(counter, array[i])
        }
    }
    console.log("TINYARRAY", tinyArray)
    for (let i = 0; i < tinyArray.length; i++) {
        if (tinyArray[i] === "a") {
            microCounter += 1
            console.log("FROM LIL BIT", microCounter, tinyArray[i])
        }
    }

    let totalAs = (counter * divided) + microCounter
    return console.log(totalAs)

}

repeatedString("aba", 5)