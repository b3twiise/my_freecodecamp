function convertHTML(str) {
  // &colon;&rpar;

let verbotten = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'":"&apos;"
}
console.log(Object.keys(verbotten))
return str.split("").reduce(function(acc, elem){
	console.log(acc)
	if(elem.match(/[&<>"']/)){
		acc = acc.concat(verbotten[elem])
		return acc
	}
	acc = acc.concat(elem)
	return acc 
}, []).join("")

}


let t = convertHTML("Dolce & Gabbana");
t = convertHTML("<>")
t = convertHTML("Schindler's List")

console.log(t)