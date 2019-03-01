//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
  return str.split("").reverse().join("")
}

let myTest = {
	"hello": "olleh",
	"Howdy": "ydwoH",
	"Greetings from Earth":"htraE morf sgniteerG"
}

let expect = require("chai").expect;


for(str in myTest){
	console.log(expect(reverseString(str)).to.equal(myTest[str]))
}


