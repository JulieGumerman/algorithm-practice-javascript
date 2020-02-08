const calcTotalInList= number => {
    let total = 0
    for (let i = 0; i <= number; i++) {
        total += i
    }
    console.log(total)
}

calcTotalInList(3)