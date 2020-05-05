const bubbleSort = (array, arrayControl) => {


    console.log(array, arrayControl);

    if (arrayControl.length === 0) {
        return array
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
        }
    }
    return bubbleSort(array, arrayControl.slice(0, arrayControl.length-1))
}

let arrayToUse = [3,1,4,5,2]

console.log(bubbleSort(arrayToUse, arrayToUse))