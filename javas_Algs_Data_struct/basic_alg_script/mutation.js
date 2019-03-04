function mutation(arr) {
  let l = arr[0]
  let  r = arr[1]

  for(c in r){
  	console.log(r[c].toLowerCase())
  	let ll = l.toLowerCase()
  	let rr = r.toLowerCase()
  	if(!ll.includes(rr[c]))
  		return false
  }
  return true
}

console.log(mutation(["hello", "Hello"]));