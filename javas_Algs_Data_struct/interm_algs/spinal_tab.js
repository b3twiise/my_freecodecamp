function spinalCase(str) {
  return str.split("").reduce(function(acc,elem, idx){
  	if(elem.match(/\W/)){
  		acc += "-"
  	}else if(elem !== elem.toLowerCase()){
  		console.log(elem)
  		let bar = elem.toLowerCase()
  		if(acc[idx -1] == "-"){
  			acc += bar
  		}else{
  			acc += "-" + bar
  		}

  	}else{
	  	  	
  		acc += elem
  	}
  	return acc

  },"")

}

let t = spinalCase('this Is Spinal Tap');
t = spinalCase("This Is Spinal Tap")
console.log(t)