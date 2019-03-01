function truncateString(str, num) {
  // Clear out that junk in your trunk
  let l =  str.slice(0,num) 
  if (l.length < str.length){
     return l +  "..."
   }
  return l
}


let a = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(a)