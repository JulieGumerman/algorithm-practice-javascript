let counterSquares = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    } else {
        let counter = 0
        for (let i = 0; i < arr1.length; i ++) {
            if (arr2.includes(Math.pow(arr1[1], 2)) === true) {
                counter += 1                
            }

      
        }
        if (counter === arr1.length) {
            return true
        } else {
            return false
        }
    }

}

const tryMe = counterSquares([1,2,3], [4,1,9])

console.log(tryMe)