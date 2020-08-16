/* const getSleepHours = day =>{ 
    switch(day){
        case 'monday' :
        return 8;
        break;
        case 'tuesday' :
        return 8;
        break;
        case 'wednesday' :
        return 8;
        break;
        case 'thursday' :
        return 8;
        break;
        case 'friday' :
        return 8;
        break;
        case 'saturday' :
        return 8;
        break;
        case 'sunday' :
        return 8;
        break;
    }
};

const getActualSleepHours = () =>
    getSleepHours ('monday') +
    getSleepHours ('tuesday') +
    getSleepHours ('wednesday') +
    getSleepHours ('thursday') +
    getSleepHours ('friday') +
    getSleepHours ('saturday') +
    getSleepHours ('sunday')
; */


const getActualSleepHours = () => 10 + 10 + 10 + 10 + 10 + 10 + 10;

const getIdealSleepHours = hours => {
    return hours * 7;
};

const calculateSleepDebt = () => {

    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(3);

    if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount of sleep. You slept ${actualSleepHours} hours` );
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} hours more than necessary.` );
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You should get some rest. You have slept ${ idealSleepHours - actualSleepHours} hours too little.`);
    }
}

calculateSleepDebt();