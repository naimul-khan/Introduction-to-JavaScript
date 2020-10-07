/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/

const votingAge = 24; 

if (votingAge >= 18) { 
  console.log("True"); 
} else { 
  console.log("False");
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

const waterTemp = 98; 
const boilingPoint = 212; 

if (waterTemp > boilingPoint) { 
  console.log("The water is boiling.")
} else { 
  console.log("The water is not boiling.")
}



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

let year = "1999"; 

// string to int conversion function

function convertFromString(stringNum) { 

  // converts parameter to int
  var nowInt = parseInt(stringNum); 

  // console check
  if(Number.isInteger(nowInt)) { 
    console.log("The number is an int. The number is " + nowInt + "."); 
  } else { 
    console.log("The number is not an int");
  }

  return nowInt; 

}


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
    /*add your code here*/
    var multAns = a * b; 

    console.log("The answer is " + multAns + ".");

    return multAns;
  }

multiply(2,5); 



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){
    /*add your code here*/
    let dogAge = age * 7; 

    console.log("The age entered was " + age + "."
           + " This age in dog years is: " + dogAge + " years."); 

    return dogAge; 
}

dogYears(12); 



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
    /*add your code here*/
    var floatWeight = Number.parseFloat(weight);
    var floatAge = Number.parseFloat(age);
    let feed = 0.0;     

    if(floatAge >= 1) { 
       if(floatWeight > 15) { 
          feed = floatWeight * .02; 
       } else if (floatWeight >= 11 && floatWeight <= 15){
          feed = floatWeight * .03;
       } else if (floatWeight >= 6 && floatWeight < 11) {
         feed = floatWeight * .04; 
       } else if (floatWeight >= 5) { 
         feed = floatWeight * .05; 
       } else { 
         console.log("Something went wrong!"); 
       }
    } else if(floatAge >= 7/12  && floatAge < 12/12) { 
        feed = floatWeight * .04;  
    } else if(floatAge >= 4/12  && floatAge < 7/12) { 
        feed = floatWeight * .05;  
    } else if(floatAge >= 2/12  && floatAge < 4/12) { 
        feed = floatWeight * .1;  
    } else { 
        console.log("The age is too young"); 
    }

    return feed;

  }

hungryDog(15, 1);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

// computer generator
let compChoice = Math.random(); 
    if (compChoice >= 0 && compChoice < 1/3){ 
      compChoice = "ROCK"; 
    } else if (compChoice >= 1/3 && compChoice < 2/3){ 
      compChoice = "SCISSORS"; 
    }if (compChoice >= 2/3 && compChoice <= 3/3){ 
      compChoice = "PAPER"; 
    }


function game(weapon, weapon2){
   
    // // format user input
    let userInput = weapon;
    var userChoice = userInput.toString().toUpperCase(); 

    let computerInput = weapon2; 
    var computerChoice = computerInput.toString().toUpperCase(); 

    // code for game
    if(userChoice == "ROCK" && computerChoice == "ROCK"){ 
        console.log("You chose " + userChoice + ". We chose " + computerChoice + ". We TIED");
        return "it's a tie"; 
    } else if(userChoice == "ROCK" && computerChoice == "PAPER"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You LOST");
      return "you lose!";
    } else if(userChoice == "ROCK" && computerChoice == "SCISSORS"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You WON");
      return "you win!"; 
    } else if(userChoice == "PAPER" && computerChoice == "PAPER"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". We TIED");
      return "it's a tie"; 
    } if(userChoice == "PAPER" && computerChoice == "SCISSORS"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You LOST");
      return "you lose!"; 
    } else if(userChoice == "PAPER" && computerChoice == "ROCK"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You WON");
      return "you win!"; 
    } else if(userChoice == "SCISSORS" && computerChoice == "SCISSORS"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". We TIED");
      return "it's a tie"; 
    } if(userChoice == "SCISSORS" && computerChoice == "ROCK"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You LOST");
      return "you lose!"; 
    } else if(userChoice == "SCISSORS" && computerChoice == "PAPER"){ 
      console.log("You chose " + userChoice + ". We chose " + computerChoice + ". You WON");
      return "you win!"; 
    } else { 
        console.log("Something went wrong :("); 
    }


}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(kmInput){
      var miles = kmInput * .621371; 
      return miles;
  }



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cmInput){
    /*add your code here*/
    var feet = cmInput / 30.48; 
    return feet;
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(startNum){
        /*add your code here*/

        let countDown = startNum;

        while (countDown > 0) { 
            let remaining = countDown- 1;
            return countDown + " bottles of soda on the wall, " + countDown + 
            " bottles of soda, take one down pass it around " +
            remaining +  " bottles of soda on the wall"; 

            countDown--;
        }
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(numGrade){
    /*add your code here*/

    if (numGrade >= 90)  {
      return "you got an A"; 
    } else if (numGrade >=80 && numGrade < 90) {
      return "you got a B";
    } else if (numGrade >=70 && numGrade < 80) {
      return "you got a C";
    } else if (numGrade >=60 && numGrade < 70) {
      return "you got a D";
    } else if (numGrade < 60) {
      return "you got an F";
    } else { 
      console.log("Oops, something went wrong :("); 
    }
  }
  
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(inputString) {
    /*add your code here*/
    console.log(inputString); 
    
    const adjustedStr = inputString.toUpperCase(); 
    console.log(adjustedStr); 
    
    const strLength = adjustedStr.length; 
    console.log(strLength); 
    
    const charArray = adjustedStr.split("");
    console.log(charArray); 
    
    let vowels = 0;
    
    for(i=0; i < strLength; i++) { 
      console.log(charArray[i] + " " + vowels);
      if(charArray[i] == "A" || charArray[i] == "E" || 
      charArray[i] == "I" || charArray[i] == "O" || 
      charArray[i] == "U")
      { 
          vowels++; 
      }
      else 
      { 
      console.log("NOT A VOWEL"); 
      }
      console.log(vowels);
    }
    
    return vowels; 
    
}
   




/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
