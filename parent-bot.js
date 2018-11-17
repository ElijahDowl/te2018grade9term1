const READLINE = require("readline-sync");



console.log("PARENT-BOT: ON");
let homeworkQuestion = READLINE.question("Do You Have a lot of Homework?");

if (homeworkQuestion == "yes"){
	console.log('Well You Better Get Started')
}
else{
	console.log('Good, you should be finished soon')
}

let teacherQuestion = READLINE.question('Did you meet with your teacher today?');

if(teacherQuestion=='yes'){
	console.log("Great")
}
else{
	console.log('Make sure you do it tomorrow')
}

let dinnerQuestion = READLINE.question("Are you hungry?");

if (dinnerQuestion == "yes"){
	console.log("Dinner is ready")
}
else{
	console.log("Dinner is ready if you do get hungry")
}