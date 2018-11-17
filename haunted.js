const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "vacuum cleaner",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house they were hired to clean`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door is greeted by a little boy holding a little red ball. He seems harmless enough. Until ${player.name} looks more closely... Th-Thats not a ball.. thats a severed head!! 'Grandpa's Gonna find yoooouuuu hehehehe' Then the boy runs off intyo the darkness of the house`);
 let leaveOrStay =  READLINE.question("Do you leave the house?") 
 console.log(`Boom!!! Click!! Thre door slams shut and locks, trapping ${player.name} inside. 'Aw Crap' ${player.name} exclaims. 'I have to find a way out' ${player.name} looks for a window, but soon realises that the house has no windows. Then ${player.name} hears a 'THUNK' 'THUNK' 'THUNK'. ${player.name} turns around and sees a bat hit their face. The last thing they hear before dying is 'I told you Grandpa would find you' `); 


} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However they hear a groan. It seems like it's coming from the ground. Is that a hand? ZOMBIES!! The undead creatures rise from the ground and starts chasing ${player.name}. They decide${player.name} goes home and never comes back. `);
  // continue the story

}
console.log("Thanks for playing!");
