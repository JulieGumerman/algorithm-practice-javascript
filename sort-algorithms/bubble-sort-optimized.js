const bubbleSort = (array, counter) => {


    console.log(array, counter);

    if (counter === 0) {
        return array
    }
    for (let i = 0; i < counter; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
        }
    }
    return bubbleSort(array, counter - 1)
}

let arrayToUse = [3,1,4,5,2]

console.log(bubbleSort(arrayToUse, arrayToUse.length))