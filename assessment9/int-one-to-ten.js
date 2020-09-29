// assign the html elements to variables
const num = document.getElementById('num');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
var number = document.getElementById('textbox');
var newww = document.querySelector('textbox');
var key = document.getElementById('key');

// create variables to be used within the script
// regex character class specifying numbers 1 to 10 only
var numbers = /^(?:[1-9]|0[1-9]|10)$/;
var myvar;
// create and output an array containing 20 random numbers

var randoms = [...Array(20)].map(() => Math.floor(Math.random() * 10 + 1));
document.write("<br>" + randoms + "<br>");
// listen for user entered value

//find array's maximum value
maximum = Math.max.apply(null, randoms);
//find array's minimum value
minimum = Math.min.apply(null, randoms);

// output arrays min and max values to screen
document.write("<br>Array Max " + maximum + "<br>");
document.write("Array Min " + minimum + "<br>");

// function finds how many times the user entered value appears within the array 
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
} 
// listen for form submission
form.addEventListener('submit', function(e) {
// compair entered number with character class
	 if(!number.value.match(numbers)) { 
	// provide user feedback
alert("Please enter a number from 1 to 10");
}else{
	// create array to store feedback
 var messages = [];
myvar = number.value;
// type cast myvar as a integer
myvar = parseInt(myvar);
num.textContent = myvar;
// prevent form default action
e.preventDefault(); 

// output user entered number
num.innerHTML = "User entered value " + myvar + "<br>";
// call function to find how many times the user entered value occurs within the array
var value3 = getOccurrence(randoms,  myvar);
// output number of occurances
num2.innerHTML = "User value Occurance " + value3 + "<br>"; 
errorElement.textContent = messages.join(', ');
// output the numbers array as a string, surrounding each number in span tags
var tag = '<p>';
for(var i = 0; i < randoms.length; i++){
tag += '<span>' + randoms[i] + '</span>';
}
tag += '</p>';
// add a class to the span tag containing the user entered value
var newvar = tag.replace(myvar, "<span class='change-color'>" + myvar + "</span>");
// output the string of characters
key.innerHTML = newvar;

}

});