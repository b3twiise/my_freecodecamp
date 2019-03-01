//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  target += "$"
  let re = new RegExp(target);
  if(str.match(re)){ return true}
  return false
}
console.log(confirmEnding("Bastian", "n"))

let myTest = {
	"Bastian": ["n",true],
	"Congratulation": ["on", true],
"Connor": ["n", false],
"Walking on water and developing software from a specification are easy if both are frozen": ["specification", false],
"He has to give me a new name": ["name", true],
"Open sesame": ["same", true],
"Open sesame": ["pen", false],
"Open sesame": ["game", false],
"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing": ["mountain", false],
"Abstraction": ["action", true]




}

let expect = require("chai").expect;

for(name in myTest){
	console.log(
		expect(confirmEnding(name, myTest[name][0])).to.equal(myTest[name][1])
			
		)
	// console.log(myTest[name])
}

