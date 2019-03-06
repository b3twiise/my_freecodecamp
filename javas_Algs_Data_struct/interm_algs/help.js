 
function objectify(arr){
	let ret = {}
	let m = Math.max(...arr)
	console.log(m)
	for(let i = 0; i <= m; i++){

		ret[i] = 0
	}
	for(let i =0; i < arr.length; i++){
		ret[arr[i]]+=1
	}
	
	return ret
}

console.log(objectify([0,2,3,3,3,4,4,5]))
 // [0,2,3,3,3,4,4,5] to {0: 1, 1:0, 2:1, 3:3, 4:2, 5:1}
function bla(arr){
	return arr.reduce(function(acc, elm){
		 if (elm in Object.keys(acc)){
		 	acc[elm] += 1
		 }else{
		 	acc[elm] = 1
		 }
		 return acc
	}, {})
}

console.log(bla([0,2,3,3,3,4,4,5]))