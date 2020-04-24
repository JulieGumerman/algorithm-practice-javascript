const byTwos = (num) => {
    if (num < 2) {
        return console.log("All done!")
    }
    console.log("I R Even", num)
    num -= 2
    return byTwos(num)
}

byTwos(10)