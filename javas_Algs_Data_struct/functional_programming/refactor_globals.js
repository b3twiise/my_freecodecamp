// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  let b = bookList // this was stewpid kuz mutating this mutated the og array
  return b.concat(bookName);
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList,  bookName) {
  let  el = bookList
  let exists = -1
 for(let i = 0; i < el.length; i++){
 	if (el[i] == bookName){
 		exists = i
 	}
 }
 if(exists >= 0){
 	return el.filter(function(elem){ return elem != bookName});
 }
    return el
    
    // Add your code above this line
    
}





var newBookList = add(bookList, 'A Brief History of Time');




var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');


var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newestBookList);


/*************************************************
Caveats I had to look out for:
replaced array.push with array.concat in add function
Used filter instead of splice in remove function
added variables functs need as args
***************************************************/