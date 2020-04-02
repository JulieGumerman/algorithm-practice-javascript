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

console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([-3, -2, 0, 3]))