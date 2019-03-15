function rot13(str) { // LBH QVQ VG!

		function shift13(elemCode){
					if(elemCode < 65 || elemCode > 90) return elemCode
          let elemAlphabetIndex = elemCode - 65
					return (((elemAlphabetIndex + 13 )% 26) + 65)

}
  
  return str.split("").map(function(elem){
  	return  String.fromCharCode(shift13(elem.charCodeAt(0)))
  }).join("").replace(/-/g, " ")
}



// Change the inputs below to test
// let l = rot13("SERR PBQR PNZC");

// let l = "SERRPBQRPNZC"

// for(i in l.split("") ){
// 	console.log(l[i], String.fromCharCode(shift13(l[i].charCodeAt(0))))
//}


// > "Z".charCodeAt(0)
// 90
// > "A".charCodeAt(0)
// 65
// > 
//65 == 90
let l = rot13("SERR PBQR PNZC JLN LJADS");
l =rot13("SERR YBIR?") 

console.log(l)
input="bla"; while IFS= read -r line; do git add $line; done