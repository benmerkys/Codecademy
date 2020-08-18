let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true; 
let runnerAge = 17; 

if (runnerAge > 18 && earlyRunner === true) {
   raceNumber += 1000;
 }

if (runnerAge > 18 && earlyRunner === true) { 
   console.log(`Runner #${raceNumber}. Your race starts at 9:30!`)
 } else if (runnerAge > 18 && earlyRunner === false) {
   console.log(`Runner #${raceNumber}. Your race starts at 11:00!`)
 } else if (runnerAge < 18) {
   console.log(`Runner #${raceNumber}. Your race starts at 12:30!`)
 } else if (runnerAge === 18) {
   console.log(`Runner #${raceNumber}. Please see the registration desk!`)
 }