function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
 return arr2.slice(n, arr1.length, ...arr1)
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));