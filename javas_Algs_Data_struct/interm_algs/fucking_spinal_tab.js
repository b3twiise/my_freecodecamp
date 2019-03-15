

function spinalCase(str){
	let capACharCode = "A".charCodeAt(0)
	let capZCharCode = "Z".charCodeAt(0)
	let minACharCode = "a".charCodeAt(0)
	let minZCharCode = "z".charCodeAt(0)



	return str.split("").map(function(el, idx){

		if(idx == 0){
			return el.toUpperCase()
		}else if(el == el.toUpperCase() && el.charCodeAt(0) >= capACharCode && el.charCodeAt(0) <= capZCharCode){ 
			//(uppcase, prev = space), (uppcase, prev != space), (lowcase prev space)
			//(lowcase, )
			return "-" + el.toLowerCase()
		
		}else if(el == el.toLowerCase() && el.charCodeAt(0) >= minACharCode && el.charCodeAt(0) <= minZCharCode){
			if(str[idx-1] == " " || str[idx-1] == "-"){
				return "-" + el
			}
			return el
		}else if(el == " " || el == "_"){
			return ""
		}
		
	}).join("")
}


let input = ["This Is Spinal Tap", "thisIsSpinalTap", "The_Andy_Griffith_Show", "Teletubbies say Eh-oh", "AllThe-small Things"]

for (let myTest in input){
	console.log(tab_a_titleCase(input[myTest]))
}

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".