const sockMerchant = (n, ar) => {
    //n is number of socks
    //ar is array of socks, each # representing a different 
    let catalog = {}

    for (let i = 0; i < ar.length; i++ ) {
        let sock = ar[i]

        //tally socks if sock id already in catalog

        //if sock not in catalog, add to catalog

        //need an if-else
        if (catalog[sock]) {
            current = catalog[sock]
            catalog[sock] = current + 1
        } else {
            catalog[sock] = 1
        }
    }

    let sockTotals = Object.values(catalog)

    let totalPairs = 0

    for (let i = 0; i < sockTotals.length; i++) {
        let straySocks = sockTotals[i]
        let pairs = Math.floor(straySocks/2)
        totalPairs += pairs
    }

    //let's start out by cataloging socks and the number of socks 
    //then somehow we'll loop through and divide totals by two, ditch remainders, and add totals to counter
    return console.log("TOTAL PAIRS", totalPairs)
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])