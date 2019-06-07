function checkCashRegister(price, cash, cid) {
  var change;
  let denums ={"PENNY": 0.01, "NICKEL":0.05, "DIME": 0.1,"QUARTER":0.5, "ONE":1, "FIVE":5, "TEN":10, "TWENTY":20, "ONE HUNDRED" : 100}
  let numVals =[0.01, 0.05, 0.1, 0.5, 1, 5, 10, 20, 100]
  let humanVals = ["PENNY", "NICKEL", "Dime", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"]

  function changeDenum(toChange, denum){
  	if(toChange < denums[denum]){
  		
  	}
  }

  function makeChange(numVals, humanVals, cid){

  }

  let totalCash = function(cid){
  	return cid.map(function(elem){
  		return elem[1]
  	}).reduce(function(acc, curr){
  		return acc + curr
  	},0.00)
  } 

  let changeDue = price - cash

  if(changeDue > totalCash){
  	{"status": "INSUFFICIENT_FUNDS", "change": []}
  }
  
  // Here is your change, ma'am.
  return (totalCash(cid)).toFixed(2)
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

let t = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(t)