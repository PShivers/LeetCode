var longestCommonPrefix = function (strs) {
	if (strs.length == 1) {
		return strs[0];
	}
	let pre = [];
	let firstWord = strs[0];
	isSame = true;

	for (let i = 0; i < firstWord.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (firstWord[i] !== strs[j][i]) {
				isSame = false;
			}
		}

		if (isSame) {
			pre.push(firstWord[i]);
		}
	}

	if (pre.length > 0) {
		return pre.join("");
	} else {
		return "";
	}
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["cir", "car"]));
