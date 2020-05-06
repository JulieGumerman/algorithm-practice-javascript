const binary = (array, newArray, value) => {

    //cut array in half to get starting index
    let i = Math.floor(newArray.length / 2)
    console.log("index", i)

    //conditional logic:
    //scenario 1: array[i] === value
        //return i
    if (newArray[i] === value) {
        return array.indexOf(value)
    }
    //scenario 2: value > array[i]
        //call binary and the second half of the array
    if (value > newArray[i]) {
        return binary(array, newArray.slice(i), value)
    }   
    //scenario 3: value < array[i]
        //call binary with the first half of the array
    if (value < newArray[i]) {
        return binary(array, newArray.slice(0, i), value)
    }

    //if you don't find it
    return -1

}

let random_array = [1,2,3,4,5]

console.log(binary(random_array, random_array, 5))