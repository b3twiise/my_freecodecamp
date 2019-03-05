function diffArray(arr1, arr2) {
  let l1 =  arr1.filter(function(elem, idx){
  	return arr2.indexOf(elem) < 0
  })


  let l2 =  arr2.filter(function(elem, idx){
  	return arr1.indexOf(elem) < 0
  })
  
  let bla= new Set(l1)

  l2.forEach(function(elem){
  	if(!(bla.has(elem))){
  		bla.add(elem)
  	}
  })



  return [...bla]
  
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));