function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(acc, elem){
    return acc.concat(Array.isArray(elem) ? steamrollArray(elem) : elem)
  }, [])
}

steamrollArray([1, [2], [3, [[4]]]]);

let a = steamrollArray([1, [2], [3, [[4]]]]);


console.log(a)