const fibonacci = (num)=> {

    //let arr = [0, 1];

    let arr = []

    if (num >= 1) {
        arr.push(0)
    }

    if (num >= 2) {
        arr.push(1)
    }

    if (num >= 2) {
        for (let i = 2; i < num; i++) {
            arr.push(arr[i-2] + arr[i-1])
        }        
    }


    return arr


}

console.log(fibonacci(10))