// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
 let el = this
 console.log(el[0])
  el.forEach(function(x, idx){
  	if(callback(x)){
  		newArray =  newArray.concat(x)
  	}
  })

  console.log(el)
  // Add your code below this line
  
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)

