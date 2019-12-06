

// // A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// // Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// // Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// function sumPrimes(num) {
  
  
//   return addPrimesSamllerThanNum(num)


// function getPrimesSmallerThanNum(num){
//   	let primes = {}
//   	for(let i = 1; i <=num; i++)
//   		primes[i] = true
//   		primes[1] = false
//   	for(let i = 2; i <= num; i++){
//   		for(j = 1; j < i;  j++){
//   			if( i % j == 0 && j != 1 ){
//   				primes[i] = false
//   				continue
//   			}
  			
//   		}
//   	}
//   	return primes
//   }


// function addPrimesSamllerThanNum(num){
// 	let truthies = getPrimesSmallerThanNum(num)
// 	console.log(truthies)
// 		let sum = 0
// 		for(let i = 1; i <= num; i++){
// 			if(truthies[i] === true){
// 				sum = sum + i
// 			}
				
// 		}
// 		return sum
// 	}
// }











function sumPrimes(num) {
  
  
  return addPrimesSamllerThanNum(num)

}
function getPrimesSmallerThanNum(num){
  	let primes = {}
  	for(let i = 1; i <=num; i++)
  		primes[i] = true
  		primes[1] = false
  	for(let i = 2; i <= num; i++){
  		for(j = 1; j < i;  j++){
  			if( i % j == 0 && j != 1 ){
  				primes[i] = false
  				continue
  			}
  			
  		}
  	}
  	return primes
  }


function addPrimesSamllerThanNum(num){
	let truthies = getPrimesSmallerThanNum(num)
		let sum = 0
		for(let i = 1; i <= num; i++){
			if(truthies[i] === true){
				sum = sum + i
			}
				
		}
		return sum
	}


console.log(sumPrimes(977))