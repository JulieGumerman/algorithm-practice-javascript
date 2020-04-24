const binaryWithPointer = (array, value) => {


    let left = array[0];
    let right = array[array.length -1];
    console.log("left", left);
    console.log("right", right);
    let middle = Math.floor(array.length /2)

    while (array[middle] !== value && start <= end) {
        if (value < array[middle]) {
            right = middle - 1

        }
        if (array[middle] > value) {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)

    }

    return arr[middle] === elem ? middle : -1
    
}

console.log(binaryWithPointer([1,2,3,4,5], 4))