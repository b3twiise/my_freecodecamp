

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.






// ***********************************
// **
// ** from wikipedia, lcm or scm(a,b) = (a*b)/gcd(a,b)
// **********************************

function scm([a,b]){

	function gcd (a, b){
	if(b == 0){
		return a
	}
	return gcd(b, a % b)
	}

	function populateRange(arr){

	let st  = arr[0] < arr[1] ? arr[0] : arr[1] 
	let  end = arr[1] > arr[0] ? arr[1] : arr[0]
	let ret = []
	for (let i = st; i <= end; i++){
		ret = ret.concat(i)
	}
	return ret

	}
	function scmArray(arr){
	let result = arr[0]
	for(let i = 1; i < arr.length; i++){
		result = (result * arr[i]) / gcd(result, arr[i])
	}
	return result
	}
	let populatedArray = populateRange([a,b])
	return scmArray(populatedArray)

}

console.log(scm([1,5]))
console.log(scm([5,1]))

console.log(scm([2,10]))
console.log(scm([13,1]))

// ****************************************
// ****courtesie of wikipedia
// ****
// *******************************************

// Input: a, b positive integers
// Output: g and d such that g is odd and gcd(a, b) = g × 2**d
//     d := 0
//     while a and b are both even
//         a := a/2
//         b := b/2
//         d := d + 1
//     while a ≠ b
//         if a is even then a := a/2
//         else if b is even then b := b/2
//         else if a > b then a := (a – b)/2
//         else b := (b – a)/2
//     g := a
//     output g, d

// Example: (a, b, d) = (48, 18, 0) → (24, 9, 1) → (12, 9, 1) → (6, 9, 1) → (3, 9, 1) → (3, 6, 1) → (3, 3, 1) ; the original gcd is thus the product 6 of 2**d = 21 and a= b= 3. 



// Recursive Method. (Chosen her)
// function gcd(a, b)
//     while a ≠ b 
//         if a > b
//            a := a − b; 
//         else
//            b := b − a; 
//     return a;


// function gcd(a,b){
// 	while(a != b){
// 		if (a > b){
// 			a = a - b
// 		}else{
// 			b = b -a
// 		}
// 	}
// 	return a
// }

// console.log(gcd(7, 5))





