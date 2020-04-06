const sameFrequency = (num1, num2) => {
    //convert numbers to strings
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    //return false if the length of input numbers are different
    if (strNum1.length !== strNum2.length) {
        return false
    }

    //counters!!!
    let countNum1 = {}
    let countNum2 = {}

    //create a dictionary of values for both numbers
    for (let i = 0; i < strNum2.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    //check to see if keys in first dictionary are the same as the keys in the second dictionary
    for (let key in countNum1) {
        //return false if one of the keys is not the same; automatically stops for loop
        if (countNum1[key] !== countNum2[key]) return false
    }

    //this means that those keys were the same
    return true;

}