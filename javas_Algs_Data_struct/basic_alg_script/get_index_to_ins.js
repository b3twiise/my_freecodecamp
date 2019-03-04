// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.


//   // let l = arr.sort()
//   // let st = l
//   // let i = 0
//   // while(st[i] < num ){
//   // 	i++
//   // }
//   // console.log(i)
//   // l.splice(i, 0, num)
//   // return l


// let l = arr.sort()
// let st = l
// let i = 0
// while(st[i] < num ){
// 	i++

//  }
// return i
// }




function getIndexToIns(arr, num) {
  let l = arr.sort(function(a,b) {return a -b })
let st = l
console.log(st)
let i = 0
while(st[i] < num ){
	++i

 }

return i
}


console.log(getIndexToIns([5, 3, 20, 3], 5))