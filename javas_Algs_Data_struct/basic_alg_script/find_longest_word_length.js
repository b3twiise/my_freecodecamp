//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
   r = str.split(" ").sort(function(a,b) {return a.length -b.length})
   
   	return r[r.length -1].length
}

let myTest = {
	"The quick brown fox jumped over the lazy dog": 6,
	"May the force be with you": 5,
	"Google do a barrel roll":6,
	"What is the average airspeed velocity of an unladen swallow":8 ,
	"What if we try a super-long word such as otorhinolaryngology" : 19
}

let expect = require("chai").expect;


for(str in myTest){
	console.log(expect(findLongestWordLength(str)).to.equal(myTest[str]))
}


