// function to create random characters
function letters(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
// call letters function and assign to list variable
var list = letters(35);
// output characters to screen
document.write(list + "<br>");
// split the string of characters into an array
arr = list.split('');
// sort the array of characters 
arr = arr.sort();
// output sorted array of characters to screen
document.write("<h3>Random Letters Now Sorted</h3>");
 for ( var i = 0; i < arr.length; i++ ) {	 
	 document.write(arr[i]);
 }
// convert array of characters to a string	
var newvar = arr.join(''); 
  
document.write("<h3>Character At Centre Of String</h3>");
// find and output the character at the center of the string  
document.write(newvar[17]);