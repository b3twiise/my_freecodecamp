function palindrome(str) {
  // Good luck!
  let cleanStr = str.toLowerCase().replace(/[^a-zA-Z\d]/g, "")
    console.log(cleanStr)

  function isPalindrome(str){
  	if(str.length <= 2){
  		return str[0] == str[str.length -1 ]
  	}else if(str[0] == str[str.length -1]){
  		let l = str.slice(1, str.length - 1)
  		return isPalindrome(l)

  	}
  	return false
  }

  return isPalindrome(cleanStr)
}



console.log(palindrome("1 eye for of 1 eye."));