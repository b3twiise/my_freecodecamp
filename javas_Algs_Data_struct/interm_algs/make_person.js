var Person = function(firstAndLast) {
  let _firstAndLast = firstAndLast
  let _first, _last
  [_first, _last] = firstAndLast.split(" ")
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return _first + " "+ _last ;
  };
  this.getLastName = function(){
    return _last
  }
  this.getFirstName = function(){
    return _first
  }
  
  this.setFirstName = function(first){
   _first = first
  }
  this.setLastName = function(last){
   _last = last
  }
  this.setFullName = function(firstAndLast){
    _firstAndLast = firstAndLast
    console.log(_firstAndLast)
  _first = _firstAndLast.split(" ")[0]
  _last = _firstAndLast.split(" ")[1]
  }
  return _firstAndLast;
};

// bob.setFullName("Haskell Curry")
// console.log(bob.getFullName())


var bob = new Person('Bob Ross');
bob.getFullName();