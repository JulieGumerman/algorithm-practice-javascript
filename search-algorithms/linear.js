const linear = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return `The index of ${value} is ${i}`
        }
    }
    return "We couldn't find it"
}

console.log(linear([1,2,3,4,5], 4))