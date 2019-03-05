function destroyer(arr) {
  // Remove all the values
let left = arguments[0]
let right = Object.values(arguments).slice(1)


return left.filter(function(elem){
	return right.indexOf(elem) < 0
})

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));