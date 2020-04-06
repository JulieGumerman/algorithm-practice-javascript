const areThereDuplicates = (...args) => {
    //return console.log(args)

    //Step 1: 
    const catalog = {}

    //Step 2:
    //loop through the whatnots
        //if you find a whatnot in the dictionary, 
            //return true
        //add each whatnot to the dictionary to catalog it
    for (let i = 0; i < args.length; i++) {
        if (catalog[args[i]] === "Wheee") {
            return console.log(true)
        }
        catalog[args[i]] = "Wheee"
        console.log("CATALOG", catalog)
    }

    //Step 3 (optional):
    //if "found in dictionary" return statement is never hit, return true
    return console.log(false)
}

areThereDuplicates(1, 2, 3, 4, 5)

areThereDuplicates('a', 'b', 'c', 'a')