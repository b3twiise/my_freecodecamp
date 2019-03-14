function myReplace(str, before, after) {
	if (before.toLowerCase() != before){
		let pre = after[0].toUpperCase()

		after = pre + after.slice(1)
	}


  return str.replace(before, after);
}

let t = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
t = myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 

console.log(t)