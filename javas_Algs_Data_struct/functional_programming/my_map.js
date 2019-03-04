// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  var tmp = Object(this)
  console.log(tmp.length)
  let i = 0
  while( i < tmp.length){
   newArray[i] = tmp[i]
   i++
  }

  for(let i = 0; i < newArray.length; i++){
  	newArray[i] = callback(newArray[i])
  }
  // Add your code below this line
  return newArray
  // Add your code above this line

};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s)