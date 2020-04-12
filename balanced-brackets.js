const bb = (string) => {
    const stack = [];

    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
            stack.push(string[i])
        } else {
            let last = stack.pop();

            if(string[i] !== map[last]) {
                return false
            }
            if (stack.length !== 0) {
                return false
            }
        }
        console.log(stack)
    }
    return true
    //return true if balanced
    //return false if not
}

console.log(bb("[{}"))