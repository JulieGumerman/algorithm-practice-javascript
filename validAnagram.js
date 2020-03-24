let validAnagram = (str1, str2) => {
    //if string1 length !== string2 length
    if (str1.length !== str2.length) {
        return false
    } else {

        let counter = 0
        for (let i = 0; i < str1.length; i++) {
            //if string2 contains letters from string1
                //increment counter
            if (str2.includes(str1[i])) {
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

let tryMe = validAnagram("stack", "tacks")

console.log(tryMe)