// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to make logging easier
const log = data => console.log(data);

let resultArray = [];

const validateCred = array => {
   //reverses the array because we're checking from right to left
    array.reverse();
   
   let everyOtherDigit = []; 
   let allOtherDigits = [];
   let checkDigit = [];
   let CCNumberSum = 0;

   //iterates through every other element of the array (starting from index 1 since index 0 is the 'checkDigit')
   //if value of element, multiplied by two is greater than 9, then subract 9 and push to new array 'everyOtherDigit'
   //otherwise if element multiplied by two is less than nine, then simply push to the same array 'everyOtherDigit'
    for (i = 1; i < array.length; i+=2) {
        if ((array[i] * 2) > 9) { 
            everyOtherDigit.push((array[i] * 2) - 9);
        } else {
            everyOtherDigit.push((array[i] * 2));
            }
        }

    //take individual elements of 'everyOtherDigit' and add them all together
    for (x=0; x < everyOtherDigit.length; x++){
        CCNumberSum = CCNumberSum + everyOtherDigit[x]
    }

    //iterates through every other element of the array (starting from index 2 this time) to grab the rest of the elements and add them all together
    //take individual elements of 'everyOtherDigit' and add them all together
    for (w = 2; w < array.length; w+=2){
        allOtherDigits.push(array[w]);
        CCNumberSum = CCNumberSum + array[w];
    }

    //following Luhn's algorythm, multiply the total sum of elements by nine and push mod 10 of the result into 'checkDigit'
    CCNumberSum *= 9;
    checkDigit.push(CCNumberSum % 10);

    //compare resulting 'checkdigit' against first element of the array
    //if these are equal, then the passed card number is correct
    if ((checkDigit[0]) === array[0]) {
        //log('Card number is valid.');
        return true;
    } else {
        //log('Card number is invalid.')
        return false; 
    }
};

const findInvalidCards = nestedArray => {
    let invalidCards = [];

    for (c = 0; c < nestedArray.length; c++) {
        if (validateCred(nestedArray[c]) === false) {
            invalidCards.push(nestedArray[c]);
        }
    }
    return invalidCards;
};

//log(findInvalidCards(batch));

const idInvalidCardCompanies = invalidCardArray => {

    for (f = 0; f < invalidCardArray.length; f++){

        if ((invalidCardArray[f][0]) === 3) {
            log('This card is Amex');
        }
    }
};

idInvalidCardCompanies(findInvalidCards(batch));