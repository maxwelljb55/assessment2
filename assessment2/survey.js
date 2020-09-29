// function to calculate the result of the survey
function sendresults() {
  // initialize variables for each choice's score
 
  var donotknow = 0;
  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      if (choices[i].value == 'choice4') {
        donotknow = donotknow + 1;
      }     
    }	 
  }  
  // return the value from the rate text field
   var rate = document.getElementById("rate").value;
   // typecast variable as integer
          rate = parseInt(rate);
// if user enters 6 add one to don't know count
  	 if(rate===6) {donotknow = donotknow + 1;}   
  
   var i = document.getElementById('select1');
   // return the chosen value from first drop down menu    
     var opt1 = i.options[i.selectedIndex].value; 
	 // if user selects don't know add one to count      
      if(opt1==0) {donotknow = donotknow + 1;}	  
   
   var e = document.getElementById('select2');
   // return the chosen value from second drop down menu       
     var opt2 = e.options[e.selectedIndex].value; 
	  // if user selects don't know add one to count      
      if(opt2==0) {donotknow = donotknow + 1;}    
  
  // Find out the number of Do not know responses.
  var score = Math.max(donotknow); 
  
  // Display feedback
  var answerbox = document.getElementById('answers');
  if (donotknow == score) { // If user chooses Do not know, this outcome will be displayed.
    answerbox.innerHTML = "You said <strong>Do not know</strong> to <strong>" + score + "</strong>&nbsp;questions!<br>Thanks you for completing the survey. You are a pillar of the community.";
  } 
}
// reset form
function resetform() {
  var feedback = document.getElementById('answers');
  feedback.innerHTML = "Feedback will display here!";
}