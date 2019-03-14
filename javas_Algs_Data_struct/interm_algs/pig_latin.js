function translatePigLatin(str) {
	return str.split(" ").reduce(function(acc, elem){
		if(getIndexConsConsnats(elem) < 0){
			acc =  acc + (elem + "way")
		}else{
			let consStreamIdx = getIndexConsConsnats(elem)
			console.log(consStreamIdx)
			let conses = elem.slice(0, consStreamIdx + 1)
			console.log(conses)
			acc = ( elem.slice(consStreamIdx + 1) + conses + "ay")
		}
		return acc
	}, "")



function getIndexConsConsnats(str){
		if(str.length == 0 || str[0].match(/[ouaei]/) ){
			return -1
		}
		return 1 + getIndexConsConsnats(str.slice(1))
	}

	
}


let t = translatePigLatin("consonant");
console.log(t)

