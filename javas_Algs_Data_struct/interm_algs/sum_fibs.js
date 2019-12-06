

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function sumFibs(num) {
	let odd_fib_sum = 0
	let l = 1, r = 1
	let c, prevOdd
	while(l <= num ){ 
		if(l % 2 != 0){
		odd_fib_sum += l
	}
	c = l + r 
	l = r 
	r = c 

	

	}
	
	return odd_fib_sum 
}







let arr = [1, 1000, 4000000, 4, 75024, 75025]
for(let i in arr){
	console.log(arr[i], sumFibs(arr[i]))
}