//my first hash function

const hashFunction = (key, arrayLength) => {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength
    }
    console.log("hasharoozle total", total)
}

const hashRevised = (key, arrayLength) => {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total + WIERD_PRIME + value) % arrayLength
    }
    console.log("hasharoozle total", total)
}

hashFunction("green", 5)