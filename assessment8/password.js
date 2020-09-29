// assign the html elements to variables
var password = document.getElementById('password');
var form = document.getElementById('form');
var formsubmit = document.getElementById('formsubmit');
var errorElement = document.getElementById('error');
// create variables to be used within the script
var actualpassword = "LogMeIn21";
var entryCount = 0;
var entryLimit = 3;
var entryLimitOutput = 3;
// assign regex character class to a variable
var letters = /^[0-9a-zA-Z]+$/;
 // create form submission event listener   
form.addEventListener('submit', (e) => {
// create an empty array to store user feedback
let messages = [];
// check if password field is submitted empty
if(password.value === '' || password.value == null){
messages.push("Password is required<br>");
}
// check if password field contains enough characters
else if(password.value.length < 6){
messages.push("Password too short<br>");
}
// check if password field contains too many characters
else if(password.value.length >= 20){
messages.push("Password too long<br>");
}
// check if password field contains any characters other that letters and numbers
else if(!password.value.match(letters)) { 
messages.push("Password can only contain letters and numbers<br>");
}else if(password.value == actualpassword){
// check if password is correct and if so provide suitable feedback

messages.push("<h3>Welcome To The Website!</h3>");
password.value = '';
formsubmit.disabled = true;
}else{
// provide suitable feedback if password is wrong
messages.push("Wrong Password please try again!");	
	}
// prevent default form submission
if(messages.length > 0){
e.preventDefault();
// count number of login attempts
entryCount++;
// check if number of login attempts has been exceeded 
if(entryCount == entryLimit){
messages.length = 0;
// if too many login attempts provide feedback
messages.push("Too many login attempts<br>Please try latter!<br><br>");
// Ensure password field is empty for next attempt
password.value = '';
// disable submit button if maximum number of attempts has been exceeded  
formsubmit.disabled = true;
// provide additional feedback by greying out submit button
formsubmit.style.backgroundColor = 'lightgrey';
}
// output feedback to screen
errorElement.innerHTML = messages.join('');
}
// decrement login attempts output counter
entryLimitOutput--;
// output number of login attempts remaining
document.getElementById("entryLimitOutput").innerHTML = "Login attempts remaining " + entryLimitOutput + "<br><br>";
});