function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(n) {return Boolean(n)})
}

console.log(bouncer(bouncer([false, null, 0, NaN, undefined, ""])));