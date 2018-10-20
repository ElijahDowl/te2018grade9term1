// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents:undefined,
	quarters:undefined,
	dimes:undefined,
	nickels:undefined,
	pennies:undefined,
	greeting:"Hello! How much do you want to withdraw?",
	farewell:"Thank You! Please come again!"
};

// write code below that simulates the change machine in action!
let inputCents=READLINE.question("Hello! How much do you want to withdraw?:  ");
let quarters = Math.floor(inputCents/25);
let dimes = Math.floor((inputCents%25)/10);
let nickels = Math.floor(((inputCents%25)%10)/5);
let pennies  = Math.floor(((inputCents%25)%10)%5);

changeMachine.inputCents= inputCents
changeMachine.quarters= quarters
changeMachine.dimes= dimes
changeMachine.nickels= nickels
changeMachine.pennies= pennies

console.log(`${changeMachine.inputCents} makes:

	)
