function chunkArrayInGroups(arr, size) {
	let stor = []
 for(let i = 0; i < arr.length; i+= size){
 	let st = []
 	for (let j = 0; j < size && i + j < arr.length; j++ ){
 		st.push(arr[i + j])
 	}
 	stor.push(st)
 }
 return stor
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));