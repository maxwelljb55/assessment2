  		var welldone = document.getElementById("welldone");
		var showanswer = document.getElementById("showanswer");
		var goagain = document.getElementById("goagain");
		var correct = 0;
		var min = 10;
		var max = 30;
		// Generate 2 random numbers between 10 and 30
  	  let num1 = Math.floor(Math.random() * (max - min + 1) ) + min;
      let num2 = Math.floor(Math.random() * (max - min + 1) ) + min;
  		// return the values from the text fields
      document.getElementById("number1").value = num1;
      document.getElementById("number2").value = num2;
		// add the 2 text fields values together 
      let adds= num1 + num2;

      function addition(){
		// return the value entered in the answer text field 
         var user= document.getElementById("answer").value;
		// Check if the user entered value matches the generated total
         if( user == adds){
			 // if correct add 1 to the corrext answers total
			correct++;
			
			// provide user feedback if answer is correct
            document.getElementById("result").innerHTML = "<h2>Well Done Your Score is " + correct + "</h2>";		
			
         }else{
			 
			 // provide user feedback if answer is wrong
             document.getElementById("result").innerHTML = "<h2>Sorry Correct Answer is " + adds + "  Please Try Again</h2>";
         }
		 
		 if(correct == 8){  
		 // End the quiz and provide user feedback by overwriting the page
		 
		 welldone.innerHTML = "<h2>Well done!<br>You have answered more than 7 questions correctly!</h2>";
		 submitted.disabled = true;
		 showanwser.style.display = "none";
		 goagain.style.display = "block";
		 
		 }
		 // reset the answer text field to empty
           user= document.getElementById("answer").value = "";
		 // place cursor in answer text field in preperation for next answer
		   user= document.getElementById("answer").focus();
		// Ensure variable values are available within the function
      num1 = Math.floor(Math.random() * (max - min + 1) ) + min;
      num2 = Math.floor(Math.random() * (max - min + 1) ) + min;

      document.getElementById("number1").value = num1;
      document.getElementById("number2").value = num2;

      adds= num1 + num2;
      }