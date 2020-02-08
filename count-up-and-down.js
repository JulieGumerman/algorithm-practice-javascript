//O(n) notation
//change is proportional

const countUpAndDown = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
    console.log("yeet")
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
    console.log("bop")
}

countUpAndDown(5)

const printAllPairs = num => {
    "start printing here..."
    for (let i = 0; i <= num; i++) {
        for (let j = num; j >= 0; j--) {
            console.log(i, j)
        }
    }
}
printAllPairs(6)