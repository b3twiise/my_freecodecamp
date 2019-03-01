//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit/

function convertToF(celsius) {
  let fahrenheit =  celsius * 9/5.0 + 32
  return fahrenheit;
}

let myTest = {
	"-30": -22,
	"-10": 14,
	"0":32,
	"20":68,
	"30":86
}

assert = require("assert");


for(cels in myTest){
	console.log(assert.equal(convertToF(parseInt(cels)),  myTest[cels]), "correct")
}


console.log(convertToF(30));