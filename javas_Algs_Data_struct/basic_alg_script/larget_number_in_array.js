// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
function largestOfFour(arr) {
 let  l = []
 arr.forEach(function(a){ l.push(Math.max(...a))})
  return l
}

let  arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

let res = [ 5, 27, 39, 1001 ]
let expect = require("chai").expect;
console.log(largestOfFour(arr))
console.log(res)
	console.log(expect(
		largestOfFour(arr).toString())
	.to.equal(res.toString()))


