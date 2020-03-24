let validAnagram = (str1, str2) => {
    //if string1 length !== string2 length
    if (str1.length !== str2.length) {
        return false
    } else {
        strOneArray = str1.split("")
        strTwoArray = str2.split("")
        counter = 0
        for (let i = 0; i < strOneArray.length; i++) {
            //if string2 contains letters from string1
                //increment counter
            if (strTwoArray.includes(strOneArray[i])) {
                counter += 1
            } 
        }
        if (str1.length === counter) {
            return true
        } else {
            return false
        }
    }


}

let tryMe = validAnagram("cats", "stack")

console.log(tryMe)