function threeSum(arr, target) {
    arr.sort((a, b) => {
        return a - b
    })

    const result = [];

    for (let indexA = 0; indexA < arr.length -2; indexA++) {
        let indexB = indexA + 1
        let indexC = arr.length - 1

        if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

        while (indexB < indexC) {
            let sum = arr[indexA] + arr[indexB] + arr[indexC];

            if (sum < target) {
                indexB++;
            } else if (sum > target) {
                indexC--;
            } else {
                result.push([arr[indexA], arr[indexB], arr[indexC]])
                while (arr[indexB] === arr[indexB + 1]) indexB++;
                while(arr[indexC] === arr[indexC - 1]) indexC--;
                indexB++
                indexC--
            }
        }
    }
    return result;
}

console.log(threeSum([3, 5 , -8, 0, -6, 2, 4], 0))