var correct = 0;
var correct2 = 0;
var max_guesses = 6;
var guessCount = 1;
var rounded;
// assign the html elements to variables
var gobtn = document.getElementById("go");
var goagain = document.getElementById("goagain");
// listen for form submission  
gobtn.addEventListener("click", function(){
// load text file containing colour names		  
fetch('textfile.txt')
  .then(response => response.text())
  .then(data => {
	 let lines = data.split(/\r\n|\n/);		
// call randomColor function to randomize the color names
// assign the color names to the relevant boxes
var colors = randomColor(lines);
box.textContent = colors;
box.style.backgroundColor = colors;    

var colors2 = randomColor(lines);
box2.textContent = colors2;
box2.style.backgroundColor = colors2;    

var colors3 = randomColor(lines);
box3.textContent = colors3;
box3.style.backgroundColor = colors3;    

 // Check the number of guesses is less than the maximum allowed    
  if(guessCount < max_guesses){ // number guessed by user    
    // check if all colors match
  if(colors === colors2 && colors === colors3 && colors2 === colors3){
  // award £1 if all colors match
       correct += 100;
	   var result = parseFloat(correct) / 100.0;	
	   var rounded = result.toFixed(2); 
	   // output the number of guesses and winnings total so far
      box4.innerHTML = "<h2>Try number " + guessCount + "<br>Current winnings £" + rounded + "</h2>";
	  // increment the number of guess total
  	  guessCount++;
	 // check is any 2 colors match
   } else if(colors === colors2 || colors === colors3 || colors2 === colors3){
	    // award 50p if 2 colors match
	    correct += 50;
	   var result = parseFloat(correct) / 100.0;	
	   var rounded = result.toFixed(2);     
      box4.innerHTML = "<h2>Try number " + guessCount + "<br>Current winnings £" + rounded + "</h2>";
	    // increment the number of guess total
  	  guessCount++;
	   // Check if no colors match
   } else if(colors && colors2 && colors3){ 
	   var result = parseFloat(correct) / 100.0;	
	   var rounded = result.toFixed(2);     
	   box4.innerHTML = "<h2>Try number " + guessCount + "<br>Sorry no luck this time!" + "<br>Current winnings £" + rounded + "</h2>";
	 // increment the number of guess total
  	  guessCount++;
	  }	  
  }else{ 
   // If maximum numbers of quesses has been passed provide feedback	 
	var result = parseFloat(correct) / 100.0;	
	var rounded = result.toFixed(2);   
  box4.innerHTML ="<h2>Game over!<br>" + "You Won £" + rounded + "</h2>";
  // hide previous feedback
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  // display the Play again button
  goagain.style.display = "block"; 
  // disable the next try button  
  gobtn.disabled = true;
  
  }

  });  
	  });
	// function to randomize colour names  
  function randomColor(lines) {
   return lines[Math.floor(Math.random() * lines.length)];
}
  
 
