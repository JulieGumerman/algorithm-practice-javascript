const palindromical = word => {
    wordArray = word.split("")
    let catalog = []
    for (let i = 0; i < wordArray.length; i++) {
        catalog.unshift(wordArray[i])
    }


    //return console.log(wordArray, catalog)
    counter = 0
    for (let j = wordArray.length - 1; counter < wordArray.length; j--) {
        
        //console.log(`catalog[index]: ${catalog[counter]}, wordArray[j]: ${wordArray[j]}`)
        if (catalog[counter] !== wordArray[j]) {
            return console.log(`${word} is NOT a palindrome`)
        }
        counter += 1
    }
    return console.log(`${word} is INDEED a PALINDROME`)
}

palindromical("racecar")
palindromical("ice")
palindromical("madam")
palindromical("aaabb")
palindromical("abc")