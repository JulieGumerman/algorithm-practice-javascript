const sumZero = sortedArray => {
    let perfectPair = [];
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[i] + sortedArray[j] === 0 && sortedArray[i] !== sortedArray[j]) {
                perfectPair.push(sortedArray[i])
                perfectPair.push(sortedArray[j])
                return perfectPair
            }
        }
    }
    return undefined
}

const sumZeroPointers = sortedArray => {
    let left = 0;
    let right = sortedArray.length - 1;
    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum === 0) {
            return[sortedArray[left], sortedArray[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}
console.log(sumZeroPointers([-2, 0, 1, 3]))
console.log(sumZeroPointers([-3, -2, 0, 3]))