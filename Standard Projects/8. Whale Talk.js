let input = 'a whale of a deal!';

const vowels = ['a','e','i','o', 'u'];

const log = data => console.log(data);

let resultArray = []; 

for (let i = 0; i < input.length; i++) {
    input[i];
    //log(input[i]);
    for (let y = 0; y < vowels.length; y++){
        vowels[y]; 
        if (input[i] === vowels[y]) {
            resultArray.push(input[i]);
                if (input[i] === 'e') {
                    resultArray.push(input[i]);
                }
                if (input[i] === 'u') {
                    resultArray.push(input[i]);
                }
        }
    }
}

log(resultArray.join('').toUpperCase());