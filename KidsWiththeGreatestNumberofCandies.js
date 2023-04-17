var kidsWithCandies = function (candies, extraCandies) {
	result = [];
	for (i = 0; i < candies.length; i++) {
		console.log(candies[i] + extraCandies);
		console.log(Math.max(...candies));
		// if(candies[i] + extraCandies > Math.max(candies)){
		//     result.push(true)
		// } else{
		//     result.push(false)
		// }
	}
	return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
