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
        console.log("counter!!!", counter)
        let endpoint = counter + i
        console.log("endpoint!!!", endpoint)
        let newArr = array.slice(i, number + i)
        subarrays.push(newArr)
    }
    console.log(subarrays)


}

maxSubarraySum([100, 200, 300, 400], 2)