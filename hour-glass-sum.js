const hourglasssum = arr => {
	//variable to hold largest sum
	let largest_sum = 0
	//this outer for loop snags each array w/in the array
	for (let i = 0; i < arr.length -2; i++) {
		for (let j = 0; j < arr[0].length - 2; j++){
			//console.log(arr[i][j])
			let row1 = arr[i][j] + arr[i][j+1] + arr[i][j+2]
			let row2 = arr[i + 1][j + 1]
			let row3 = arr[i + 2][j] + arr[i + 2][j+1] + arr[i + 2][j + 2]
			let current_sum = row1 + row2 + row3

			if (current_sum > largest_sum) {
				console.log("The current sum just became the largest sum")
				largest_sum = current_sum
			}
		}
		
	}

	return console.log(`The largest sum is ${largest_sum}`)

	//return console.log(`And the largest sum is ${largest_sum}`)

}

//hourglasssum([1, 2, 3, 4, 5, 6])
hourglasssum([
	[1, 1, 1, 0, 0, 0], 
	[0, 1, 0, 0, 0, 0], 
	[1, 1, 1, 0, 0, 0], 
	[0, 0, 2, 4, 4, 0], 
	[0, 0, 0, 2, 0, 0], 
	[0, 0, 1, 2, 4, 0]
]
	)



	//loop across
// 	for (let i = 0; i < arr.length - 3; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			let current_sum = arr[i] + arr[i + 1] + arr[i+2]
// 			console.log(`Current sum: ${current_sum}`)
// 			if (current_sum > largest_sum) {
// 				console.log(`Current sum is now largest sum`)
// 				largest_sum = current_sum
// 			}
// 		}
// 	//loop down
// 		//curr_hourglass_sum variable
// 		//if sum is larger than largest sum
// 			//largest_sum = sum
// }


