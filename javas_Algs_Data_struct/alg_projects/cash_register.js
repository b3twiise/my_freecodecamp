// JavaScript Algorithms and Data Structures Projects: Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function checkCashRegister(price, cash, cid) {

var enums = 
[["PENNY", 0.01],
["NICKEL", 0.05],
["DIME", 0.1],
["QUARTER", 0.25],
["ONE", 1],
["FIVE", 5],
["TEN", 10],
["TWENTY", 20],
["ONE HUNDRED", 100]]
  var sumOwed = cash - price
  function sumInDrawer(){
    var sum =0
    for(var i = 0; i < cid.length; i++){
      sum += cid[i][1];
    
    }
      return sum.toFixed()
  }
var state = {
  status : "",
  change : []
}
console.log(getChange())

if(sumInDrawer() < sumOwed){                        //take care of not enough money to dispense
state["status"] = "INSUFFICIENT_FUNDS"
return state
}

function getChange(){
  var tray = []
  var i = enums.length - 1
  var tmp = {}
  while(i >=0 ){
    if(sumOwed >= enums[i][1] && cid[i][1] > enums[i][1]){
    sumOwed -= cid[i][1]
    tmp[cid[i][0]] = (tmp[enums[i][0]] == undefined) ?  enums[i][1] : (tmp[enums[i][0]] + enums[i][1])
}
        i -= 1

  }
console.log(tmp)
}

return sumInDrawer(cid)

}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))