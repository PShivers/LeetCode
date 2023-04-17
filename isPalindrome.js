//Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function (x) {
	//my solution
	const reverseString = (str) => {
		arr = str.split("");
		return arr.reverse().join("");
	};
	let str = x.toString();
	let reversedStr = reverseString(str);
	return reversedStr === str;

	//best of leetcode
	// if (num < 0) {
	//   // Negative numbers are not palindromes
	//   return false;
	// }

	// let reversedNum = 0;
	// let originalNum = num;

	// // Reverse the digits of the original number
	// while (originalNum > 0) {
	//   reversedNum = reversedNum * 10 + originalNum % 10;
	//  this works because modulo doesn't return a decimal if the divisor is larger than the first number. ex 2 % 10 returns 2. basically it seems to ignore the attempted division and gives back the number
	//   originalNum = Math.floor(originalNum / 10);
	// }

	// // Check if the reversed number is the same as the original number
	// return num === reversedNum;
};

//using recursion
// function reverseString(str) {
//   if (str === "") // This is the terminal case that will end the recursion
//     return "";

//   else
//     return reverseString(str.substr(1)) + str.charAt(0);
/* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
//}

reverseString("hello");

console.log(isPalindrome(-121));
console.log(isPalindrome(1213));
