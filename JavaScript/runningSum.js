var runningSum = function (nums) {
	let runningSums = [];
	runningSum = 0;
	for (let i = 0; i < nums.length; i++) {
		runningSum += nums[i];
		runningSums.push(runningSum);
	}
	return runningSums;
};

console.log(runningSum([1, 2, 3, 4]));
