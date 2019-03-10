function sumFibs(num) {
	let odd_fib_sum = 0
	let l = 0, r = 1, b, c = 1
	while(r <= num){ 
	c = l + r 
	l = r 
	r = c 
	if(r % 2 != 0){
		odd_fib_sum += c
	}

	}
	return r
}






let t = sumFibs(75024)
console.log(t)

// function sumFibs(num) {
// 	let l = 1, r = 1
// 	let sum = 0
// 	let tmp = 0
// 	while(sum < num){        
// 		l = r	
// 		r = l + r
		
// 		sum = sum + r
// 		console.log(r, l, sum)

// 	}
// 	return sum 
// }