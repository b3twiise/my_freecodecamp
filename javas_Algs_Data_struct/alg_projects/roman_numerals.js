function convertToRoman(num) {
	let reach = String(num).split("")
	let reachLen = reach.length
	let ret = reach.reduce(function(acc, elem, i){
		let pre, my_local = elem
		let idx = reachLen - i 
		pre = wayPoint[idx]
	
	if (elem > 0 && elem <=3){
			pre = wayPoint[idx -1]["low"].repeat(elem)
			return acc + pre
		}else if(elem == 4){
			pre = wayPoint[idx -1]["low"] + wayPoint[idx -1]["mid"]
			return acc + pre
		}else if(elem == 5){
			pre = wayPoint[idx -1]["mid"]
			acc = acc + pre
			return acc
		}else if(elem < 9 && elem > 5){
			pre =  wayPoint[idx -1]["mid"] + wayPoint[idx-1]["low"].repeat(elem -5) 
			acc = acc + pre
			// console.log(pre, acc)
			return acc
		}else if(elem == 9){
			pre = wayPoint[idx -1]["low"] + wayPoint[idx]["low"] 
			return acc + pre
		}else{
			return acc
		}

		acc = pre + acc


		return acc
	}, "")
 return ret;


}


let wayPoint = {
	"0" : {"low": "I", "mid": "V"},
	"1":{"low" : "X", "mid": "L"},
	"2":{"low": "C", "mid": "D"},
	"3":{"low":"M", "mid": "MMMMM"}
}
console.log("Converting to Roman Numerals")

t = [649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999]

for(i in t){
	console.log(t[i], convertToRoman(t[i]))
}

// t = 16
// console.log(convertToRoman(t))