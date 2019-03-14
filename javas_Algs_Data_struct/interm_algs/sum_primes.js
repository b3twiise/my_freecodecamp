function sumPrimes(num) {
  return num;
}

function findPrimes(upTo){
	let ret = []

	for (let j = 1; i < upTo; j+= 1){

		for(let i = 1; i <= upTo; i+=2){
		if(upTo % i == 0){
			console.log("Not prime ", i)
	}else{
		ret.push(i)
		}
	}

	}
	

return ret
}

console.log(findPrimes(36))

// sumPrimes(10);

// 0 => 36

// 0 => 6