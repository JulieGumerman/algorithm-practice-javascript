//In my own words:
//1. The second parameter is a number n. 
//2. Add together the largest n numbers to return the largest sum
//3. Something consecutive something blablabla
//4. must consist of consecutive elements in array

//The plan:
//1. Suck my thumb and cry ✔ 
//For loop?
//cycle through and make an array of however many n numbers
//For loop # 2 (keeping it O(n) by keeping the loops separate and not nested)
//tally totals 
//return larges

function maxSubarraySum(array, number) {
    let subarrays = []
    let counter = number - 1
    for (let i = 0; i < array.length; i++) {
        let newArr = array.slice(i, number + i)
        subarrays.push(newArr)
    }
    let tallies = []
    for (let j = 0; j < subarrays.length; j++) {
        let sum = subarrays[j].reduce((a, b) => a + b, 0)
        tallies.push(sum)
    }


    let sorted = tallies.sort()

    console.log(sorted[sorted.length - 1])
    



}

maxSubarraySum([100, 200, 300, 400], 2)