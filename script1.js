
var questionsList = ["What is Your Name?",
					"Where are You From?",
					"What is Your Age?",
					"Which Language You are Working on?",
					"It was Pleasure Talking to You :-)"];  //Bot will be asking these questions

var questionnumber = 0 ; //keeping track of questions i.e responding according to the answer

//By default question questionList[0] value
var Botresponse = document.querySelector("#result")
if(questionnumber==0)
{
	Botresponse.innerHTML = questionsList[0];
}

var inputdata = document.querySelector("#typo"); //selecting 

//to show response 
//when user enter something in inputBox and press Enter
 function show()
 {
 	// alert(true);
 	var inputstore = inputdata.value; //storing our input value for our Bot to respond
 	if(inputdata.value == "") //checking if our input field is empty
 	{
 		//if empty nothing to return
 	}
 	else
 	{
 		// alert(true);
 		if(questionnumber == 0)
 		{
 			Botresponse.innerHTML= `Hello ${inputstore}, Nice Meeting You`;  //using ES6 template string
 			inputdata.value=""; //after 1st user input i want to empty my i/p 
 			inputdata.setAttribute("placeholder","Wait for 2 seconds");
 			questionnumber++; //incrementing questions
 			//now i want the next question should be after 2 secs
 			setTimeout(changeQuestion,2000);
 		}
 		else if(questionnumber == 1)
 		{
 			Botresponse.innerHTML=`${inputstore} is an Awesome Place`;
 			inputdata.value="";
 			inputdata.setAttribute("placeholder","Wait for 2 seconds");
 			questionnumber++;
 			setTimeout(changeQuestion,2000);
 		}
 		else if(questionnumber == 2)
 		{
 			Botresponse.innerHTML=`It means you are born in ${2021-inputstore}`;
 			inputdata.value="";
 	     	inputdata.setAttribute("placeholder","Wait for 2 seconds");
 			questionnumber++;
 			setTimeout(changeQuestion,2000);
 		}
 		else if(questionnumber == 3)
 		{
 			Botresponse.innerHTML=`${inputstore} is a Nice Language`;
 			inputdata.value=""; 			
 			inputdata.setAttribute("placeholder","Wait for 2 seconds");
 			questionnumber++;
 			setTimeout(changeQuestion,2000);
 		}
 		else if(questionnumber== 4)
 		{
 			Botresponse.innerHTML=questionsList[4];
 			inputdata.style.display="none";
 		}
 	}
 }
 	function changeQuestion()
 	{
 		 inputdata.setAttribute("placeholder","Enter your response");
 		Botresponse.innerHTML=questionsList[questionnumber];
 		// if(questionnumber == 4)
 		// {
 		// 	inputdata.style.display="none";
 		// }
 	}
 	document.addEventListener('keypress', function(event){   //if using jquery will write $(document).on
 		if(event.which == 13)  
 		{
 			show();
 		}
 	})
// var audio = new Audio('audio.mp3');
//   audio.play();