const countdown = (num) => {
    console.log(`...${num}!`)
    if (num <= 1) {
        return
    } else {
        countdown(num - 1)
    }
}

countdown(5)