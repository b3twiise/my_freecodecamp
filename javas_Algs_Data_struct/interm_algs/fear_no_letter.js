function fearNotLetter(str) {
	var one_accross = 0
  let l = str.split("").filter(function(elem,idx){
  	if(idx != 0 && elem.charCodeAt(0) - str.charCodeAt(idx - 1) !== 1){
  		 one_accross = idx
  		 return elem

  	}

  })
  console.log(elem)
  return 
}

let t = fearNotLetter("abce");
console.log(t)