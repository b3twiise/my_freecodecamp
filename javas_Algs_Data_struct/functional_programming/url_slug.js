// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
let l =  title.trim().toLowerCase().split(/\W+/).join("-")
//reduce(function(acc, cur){
//   if( cur .match(//))
// })
return l
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing)
console.log(globalTitle)