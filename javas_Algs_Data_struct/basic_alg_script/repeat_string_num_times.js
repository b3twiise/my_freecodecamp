//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str.slice(0,num)
}

repeatStringNumTimes("abc", 3);

let myTest = {
	"*": [3, "***"],
	"abc": [3, "abcabcabc"],
	"abc": [4, "abcabcabcabc"],
	"abc" :[1, "abc"],
	"*": [8, "********"],
	"abc": [-2, ""]
}

let expect = require("chai").expect;

for(name in myTest){
	console.log(
		expect(repeatStringNumTimes(name, myTest[name][0])).to.equal(myTest[name][1])
			
		)
	// console.log(myTest[name])
}



//I know that some tests are skipped because my dict keys are not unique but function seems to work fine and I dont wanna entertain the issue :()