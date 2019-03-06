function truthCheck(collection, pre) {
	let falsies = [NaN, undefined, ""]
  return collection.every(function(elem){
  	if(elem[pre])
  		return true
  	return false
  })
}

let t = truthCheck([{"single": "double"}, {"single": undefined}], "single")

console.log(t)