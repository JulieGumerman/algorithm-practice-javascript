const threeSum = (nums, target) => {
    //this will collect the arrays of triplets as we find them
    let result = [];

    //so much easier to manage if you sort it beforehand
    array = nums.sort((a,b) => a-b)

    for (let i = 0; i < array.length - 2; i++) {

        //low pointer: always [i + 1]
        let j = i + 1;
        //high pointer: always [arr.length - 1]
        let k = array.length - 1;

        //only do this while j is smaller than k
        while (j < k) {
            let sum = array[i] + array[j] + array[k]

            if (sum===target) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }
    return result;
}