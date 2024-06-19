// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.




//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// We check if name is equal to 'Mary'. 'Dane' is not equal to 'Mary', so
// we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We make a variable called secret with no initial value.
// We make a variable called code and set it to 123 as a number.
// We check if code is equal to 123. 123 is equal to 123, which is a correct condition
// we set secret to 'super' and double the value of code. code is now 246.
// We check if code is greater than 250. 246 is not greater than 250, so its a false condition
// we do not change secret.
// We console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable called isStudent and set it to true.
// We declare a variable called age and set it to 34 as a number.
// We declare a variable called zip and set it to 55407 as a number.
// 
// We check if isStudent is true & zip is greater than 8000. isStudent is true, but zip is not > 8000 so its a false condition. 
// it will console.log "How about the weather?'

// We check if isStudent is true, its not. We check if age is < 30, it is a false condition, therefore we will console.log 'How about the weather?'
//We check if rStudent is true, the conditoin is true, therefore we console.log 'Welcome to Prime!'
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';

  // The insutrciton says if mix = true then both colorOne and colorTwo should = puruple.
  Fix // if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';

}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');

  // FIX: The instruction says both conditions with "and" (&&), but the code uses "or" (||). 
// Should be: if (temp > 39 && time >= 4) {
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
  
  //Fix : The condition is true if if age is greater than or equal to minAge, therefore the console.log should be 'entry' instead of 'no entry'
} else {
  console.log('enter');

  // this is the correct way to write it 
  if (minAge <= age) {
  console.log('enter');
} else {
  console.log('no entry');
}
}
*/

