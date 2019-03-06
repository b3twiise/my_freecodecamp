function whatIsInAName(collection, source) {
  function isTruethy(elem, source){
  	return Object.keys(source).every(function(elkey){
  		return elem[elkey] == source[elkey]
  	})
  }
  return collection.filter(function(obj){
  	return isTruethy(obj, source)
  })
}

let t = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

t = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
t  = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
console.log(t)