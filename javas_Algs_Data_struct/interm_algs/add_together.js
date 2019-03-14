function addTogether() {
	function isValid(num){
		return (typeof num == "number") ? true : false
	}

	if(arguments.length == 1){
		if(! isValid(arguments[0])){

		return undefined
		}
		let x = arguments[0]
		console.log(x,"b")
		return function(y){
			if(!isValid(y)){
				return undefined
			}
			return x + y
		}
		
	}
	if(isValid(arguments[0]) && isValid(arguments[1])){
		return arguments[0] + arguments[1]
	}
	return undefined
	

 
}

console.log(addTogether(2, 3))



