function findElement(arr, func) {
  for (num in arr){
    if(func(arr[num])){
      return arr[num]
    }
  }
  return undefined
}

let l =findElement([1, 3, 5, 9], num => num % 2 === 0);

console.log(l)