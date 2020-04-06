const palindromical = word => {
    wordArray = word.split("")
    let catalog = []
    for (let i = 0; i < wordArray.length; i++) {
        catalog.unshift(wordArray[i])
    }


    //return console.log(wordArray, catalog)
    if (wordArray === catalog) {
        return console.log(`${word} is a palindrome`)
    } else {
        return console.log(`${word} is definitely NOT a palindrome`)
    }
}

palindromical("racecar")
palindromical("ice")
palindromical("madam")
palindromical("aaabb")
palindromical("abc")