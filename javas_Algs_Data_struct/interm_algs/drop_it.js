function dropElements(arr, func) {
  let finder = arr.findIndex(function(elem, idx){
  	  	console.log(elem, func(elem))

  	return func(elem)

  })
  console.log(finder)
  if(finder < 0 ){
  	return []
  }
  return arr.slice(finder)
}

dropElements([1, 2, 3], function(n) {return n < 3; });

let t = dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //[3,4]
t = dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //[1,0,1]
t = dropElements([1, 2, 3], function(n) {return n > 0;})
t = dropElements([1, 2, 3, 4], function(n) {return n > 5;}) 
console.log(t)