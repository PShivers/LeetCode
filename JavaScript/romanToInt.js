const romanToInt = function (s) {
	// need to iterate over and check for cases
	let int = 0;

	for (let i = 0; i < s.length; i++) {
		//this will handle all the numerals that are I based
    if (s[i] === "I" && (s[i + 1] === "I" || i + 1 >= s.length)) {
      int++;
    } else s[i] === "I" && s[i + 1] !== "I" {
      if(s[i + 1]==="V"){
        i += 4
      }
      if(s[i + 1] === ""){
        i += 9
      }
    }
    
    if (s[i] === "X" && (s[i + 1] === "X" || i + 1 >= s.length)) {
      int+= 10;
    } else s[i] === "I" && s[i + 1] !== "I" {
      if(s[i + 1]==="V"){
        i += 4
      }
      if(s[i + 1] === ""){
        i += 9
      }
    }
	}
	return int;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
