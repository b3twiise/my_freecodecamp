function sumAll(arr) {
  let st = arr[0] < arr[1]? arr[0] : arr[1]
  let en = arr[0] > arr[1]? arr[0] : arr[1]

function sumEm(st, en){
	if(en - st == 1){
		return st + en
	}else{
		return st + sumEm(st + 1, en)
	}
}


return sumEm(st, en)

}

console.log(sumAll([1, 4]));