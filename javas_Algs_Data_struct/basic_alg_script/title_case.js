function titleCase(str) {
  return str.split(" ").map(function(a){return a[0].toUpperCase() + a.slice(1).toLowerCase()}).join(" ")
}

console.log(titleCase("sHoRt AnD sToUt"));