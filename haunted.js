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
let death = (`${player.name} turns around and sees a bat hit their face. The last thing they hear before dying is 'I told you Grandpa would find you'`)
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
 console.log(` SLAM!!! Click!! Thre door slams shut and locks, trapping ${player.name} inside. 'Aw Crap' ${player.name} exclaims. 'I have to find a way out' ${player.name} looks for a window, but soon realizes that the house has no windows. Then ${player.name} hears a 'THUNK' 'THUNK' 'THUNK'. That kid's grandpa is coming!!! What to do what to do!!! Think ${player.name} `); 
 
 let hideOrRun = READLINE.question('Will you run? Or will you hide?');
 if(hideOrRun == "run"){
 
    console.log(`You decide to run. ${player.name} sprint for the door.'Damn! its locked, I forgot!' ${player.name} turns around and sees a bat hit their face. The last thing they hear before dying is 'I told you Grandpa would find you' `);
  }
 else{ 
  console.log(`You decide to hide under the couch. The Kid's grandpa comes into the room, but hasn't found you. He unlocks the door and looks outside for you. after coming inside, he forgets to lock the door. ${player.name} absolutely books it out of the house and doesnt look back`)
 }
}
else{
  player.intellect++;
  console.log(`${player.name} Despite their better judgement prepares their ${player.weapon} and opens the door is greeted by a little boy holding a little red ball. He seems harmless enough. Until ${player.name} looks more closely... Th-Thats not a ball.. thats a severed head!! 'Grandpa's Gonna find yoooouuuu hehehehe' Then the boy runs off intyo the darkness of the house`);
  let leaveOrStay =  READLINE.question("Do you leave the house?") 
  if(leaveOrStay == "l" || leaveOrStay == "leave"){
    console.log(`Boom!!! Click!! Thre door slams shut and locks, trapping ${player.name} inside. 'Aw Crap' ${player.name} exclaims. 'I have to find a way out' ${player.name} looks for a window, but soon realizes that the house has no windows. Then ${player.name} hears a 'THUNK' 'THUNK' 'THUNK'. That kid's grandpa is coming!!! What to do what to do!!! Think ${player.name} `); 
  }
  
 let hideOrRun = READLINE.question('Will you run? Or will you hide?');
 if(hideOrRun == "run"){
    console.log(`You decide to run. ${player.name} sprint for the door.'Damn! its locked, I forgot!' ${player.name} turns around and sees a bat hit their face. The last thing they hear before dying is 'I told you Grandpa would find you' `);
  }
 else{
  console.log(`You decide to hide under the couch. The Kid's grandpa comes into the room, but hasn't found you. He unlocks the door and looks outside for you. after coming inside, he forgets to lock the door. ${player.name} absolutely books it out of the house and doesnt look back`)
  }
}
console.log("Thanks for playing!")