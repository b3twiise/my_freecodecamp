function fearNotLetter(str) {
 let oneOff = str.split("").filter(function(elem, idx){
 	return elem.charCodeAt(0) != (str.charCodeAt(idx -1) + 1)  && idx != 0
 })
 // console.log(oneOff)
return oneOff.length > 0 ? String.fromCharCode(oneOff[0].charCodeAt(0) - 1): undefined
}

let t = fearNotLetter("abce");
console.log(t)