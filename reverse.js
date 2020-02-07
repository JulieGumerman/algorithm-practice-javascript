let arr1 = ["yes", "no", "maybe", "always"];

let arr2 = [1, 2, 3, 4, 5, 6];

//returns flipped array in new array
//Way #1
const reverseArray = (arr) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.unshift(arr[i])
    }
    console.log("reverse array function", newArray)
}

const reverseArrayNumberTwo = (arr) => {
    const aNewArray = []
    for (let i = arr.length -1; i >=0; i--) {
        aNewArray.push(arr[i])
    }
    console.log(aNewArray)
}




//returns flipped array in same array
const reverseArrayInPlace = () => {
    return 
}

reverseArray(arr1)
reverseArray(arr2)
reverseArrayNumberTwo(arr1)
reverseArrayNumberTwo(arr2)