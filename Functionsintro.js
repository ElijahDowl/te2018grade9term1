const READLINE = require("readline-sync");
//function sayHello(name) {
//	console.log (`Hello ${name}`);
//}

//function bother(name) {
	//sayHello(name);
//	sayHello(name);
//	sayHello(name);
//	sayHello(name);
//	sayHello(name);
//	sayHello(name);

//}

//sayHello("Mark");
//sayHello("Josh")

//function addition (x,y) {
	//let x =READLINE.question ('What is your first number?')
	//console.log ()
//}

//function getAge(){
//	let birthYear= READLINE.question ("What is your birth Year?: ");
//	let currentYear = (new Date()).getFullYear();
//	let age = currentYear - birthYear;
//	return age;

//}

//let age = getAge();
//if (age < 17){
//	console.log("No R-Rated Movies")
//}


let dog = {
	numLegs: 4,
	amputate: function(legs){
		this.numLegs - legs;
	}
}