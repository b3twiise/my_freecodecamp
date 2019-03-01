//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
  if(num == 0){
  	return 1
  }else{
  	return num * factorialize(num - 1)
  }
}

factorialize(5);

let myTest = {
	"0": 1,
	"5": 120,
	"20":2432902008176640000,
	"10":  3628800
}

let expect = require("chai").expect;


for(str in myTest){
	console.log(expect(factorialize(parseInt(str))).to.equal(myTest[str]))
}


