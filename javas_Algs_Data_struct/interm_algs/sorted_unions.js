function uniteUnique(arr) {
 let arrified = Object.values(arguments)
 let n = arrified.length

 
 	return arrified.reduce(function(acc, cur){
 		cur.forEach(function(entry){
 			if(acc.indexOf(entry) < 0){
 				console.log(acc, acc.indexOf(entry), "entry ==>", entry)
 				 acc.push(entry)
 			}
 		})
 		return acc
 	}, [])
 
}

let t = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
t = uniteUnique([1, 3, 2], [1, [5]], [2, [4]])
console.log(t)