const fibonacciRecursive = (n) => {
    if (n === 1) {
        return [0, 1];
    } else {
        let s = fibonacciRecursive(n-1);
        console.log("SSS", s)
        s.push(s[s.length - 1] + s[s.length - 2])
        return s;
    }
}

console.log(fibonacciRecursive(5))