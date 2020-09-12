let name1 = 'Benas';
let name2 = 'Jaunius';
let name3 = 'Gabija';


let person1Money = 10;
let person2Money = 10;
let person3Money = 65;



const log = data => console.log(data);


const peopleCount = (person1, person2, person3) => {
    let peopleArray = [];

    if (person1 >= 0) {
        peopleArray.push(person1)}
    if (person2 >= 0){
        peopleArray.push(person2);}
    if (person3 >= 0){
        peopleArray.push(person3);}

    return peopleArray.length
};


const splitBill = (person1, person2, person3) => {
    
    let numberOfPeople = peopleCount(person1Money,person2Money, person3Money);
    let average = 0;

    total = (person1 + person2 + person3);
    average = total / numberOfPeople;

    log(`Total money spent is £${Math.abs(total).toFixed(2)}`);
    log(`Everyone should have spent £${Math.abs(average).toFixed(2)}`);

    let x = person1 - average;
    let y = person2 - average;
    let z = person3 - average;
    
    if (x < 0) {
        log(`${name1} underpaid by £${Math.abs(x).toFixed(2)}`)
    } else if (x > 0){
        log(`${name1} overpaid by £${x.toFixed(2)}`)
    } if (y < 0) {
        log(`${name2} underpaid by £${Math.abs(y).toFixed(2)}`)
    } else if (y > 0){
        log(`${name2} overpaid by £${y.toFixed(2)}`)
    } if (z < 0) {
        log(`${name3} underpaid by £${Math.abs(z).toFixed(2)}`)
    } else if (z > 0){
        log(`${name3} overpaid by £${z.toFixed(2)}`)
    }


    //more than
    if (x > y && x > z) {
        log(`${name2} owes ${name1} £${Math.abs(y).toFixed(2)} and ${name3} owes ${name1} £${Math.abs(z).toFixed(2)}`)

    } else if (y > x && y > z) {
        log(`${name1} owes ${name2} £${Math.abs(x).toFixed(2)} and ${name3} owes ${name2} £${Math.abs(z).toFixed(2)}`)
        
    } else if (z > x && z > y) {
        log(`${name1} owes ${name3} £${Math.abs(x).toFixed(2)} and ${name2} owes ${name3} £${Math.abs(y).toFixed(2)}`)

        //less than
    } else if (x < y && x < z) {
        log(`${name1} owes ${name2} £${Math.abs(y).toFixed(2)} and ${name1} owes ${name3} £${Math.abs(z).toFixed(2)}`) 

    } else if (y < x && y < z) {
        log(`${name2} owes ${name3} £${Math.abs(y).toFixed(2)} and ${name1} owes ${name3} £${Math.abs(x).toFixed(2)}`) 

    } else if (z < x && z < y) {
        log(`${name3} owes ${name1} £${Math.abs(x).toFixed(2)} and ${name3} owes ${name2} £${Math.abs(y).toFixed(2)}`) 
    }

};

splitBill(person1Money, person2Money, person3Money);