const fibonacci = (num, arr)=> {

    arr.push(num)
    console.log(arr)

    if (num <= 1) return 1;
    return fibonacci(num - 1, arr) + fibonacci(num - 2, arr)
}

fibonacci(3, [])