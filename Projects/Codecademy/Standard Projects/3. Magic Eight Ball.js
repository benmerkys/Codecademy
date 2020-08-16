const userName = 'Benas';
userName ? console.log(`Hello ${userName}!`) : console.log(`Hello!`); 

let userQuestion = 'Will it rain today?';
console.log(userName, 'asks:', userQuestion); 

let randomNumber = Math.floor(Math.random() * 8);
//console.log(randomNumber); 

let eightBall = ''; 

/* switch (randomNumber) {
  case 0:
  eightball = 'It is certain'; 
  break;
  case 1: 
  eightball = 'It is decidedly so';
  break;
  case 2:
  eightball = 'Reply hazy try again';
  break;
  case 3:
  eightball = 'Cannot predict now';
  break;
  case 4:
  eightball = 'Do not count on it';
  break;
  case 5:
  eightball = 'My sources say no';
  break;
  case 6:
  eightball = 'Outlook not so good';
  break;
  case 7:
  eightball = 'Signs point to yes';
  break;
  default:
  console.log('Error');
  break;
} */



if (randomNumber === 0){
  eightball = 'It is certain';
} else if (randomNumber === 1){
  eightball = 'It is decidedly so'
} else if (randomNumber === 2){
  eightball = 'Reply hazy try again';
} else if (randomNumber === 3){ 
  eightball = 'Cannot predict now';
} else if (randomNumber === 4){ 
eightball = 'Do not count on it';
} else if (randomNumber === 5){ 
eightball = 'My sources say no';
} else if (randomNumber === 6){ 
eightball = 'Outlook not so good';
} else if (randomNumber === 7){ 
eightball = 'Signs point to yes';
} else {
eightball = 'My sources say no';
}

console.log(`Magic eightball says: ${eightball}`);