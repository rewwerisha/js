let arr = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

let coords = [];

function krestNol (arr) {
    arr.forEach((item, i) => {
        arr.forEach ((item, m) => {
            if (arr[i][m] === 0) {
                coords.push({i, m})
            }
        })
    });

    coords.forEach((item, o) => {
        let arrCoords = coords[o];
        arr.forEach((item, w) => {
            arr.forEach((item, e) => {
                if (w === arrCoords.i) {
                    arr[w][e] = 0;
                }
                if (e === arrCoords.m) {
                    arr[w][e] = 0;
                }
            });
        });
    });
}

krestNol(arr)

//console.log(arr)

//

let string = "abcabedbasd";
let temporaryArray = [];
let temporaryArrayLength = 0;

function stringNoRepeat (string) {
    let arrString = string.split("");

    arrString.forEach((item, i) => {
        for (let j = i; j < arrString.length; j++) {
            if (!temporaryArray.includes(arrString[j])) {
                temporaryArray.push(arrString[j])
            } else {
                if (temporaryArray.length > temporaryArrayLength) {
                    temporaryArrayLength = temporaryArray.length;
                    temporaryArray = [];
                }
                break;
            }
        }
    });
}

stringNoRepeat(string)
console.log(temporaryArrayLength)

//

let repeatNumber = 1;
let tempRepeatNumber = 0;
let number;
let arrWithNumbers = [3, 3, 9, 9, 9];


function repeatNumberCount (arrNumbers) {
    arrNumbers.forEach( (item, i) => {
        arrNumbers.forEach( (item, j) =>{
            if (arrNumbers[i] === arrNumbers[j]) tempRepeatNumber++;
            if (repeatNumber < tempRepeatNumber) {
                repeatNumber = tempRepeatNumber;
                number = arrNumbers[i];
            }
        });
        tempRepeatNumber = 0;
    });

    if (repeatNumber / (arrNumbers.length) > 0.5) {
        console.log(`number ${number} ${repeatNumber} times`)
    } else {
        console.log('fail')
    }
}
repeatNumberCount(arrWithNumbers)

//полидром

function nearestPolidrom(num) {
    let less;
    for (less = num; less > 0; less--) {
        if (checkNumber(less)) {
            break;
        }
    }
    let more = num;
    while (!checkNumber(more)) {
        more++;
        if (checkNumber(more)) {
            break;
        }
    }
    if ((num - less) < (more - num)) {
        // console.log(less)
    } else {
        // console.log(more)
    }
}

nearestPolidrom(23789033)

function checkNumber(nearestNumber) {
    let numberArray = String(nearestNumber).split("");
    let arrLength = numberArray.length - 1;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === numberArray[arrLength - i]) {
            if ((i === arrLength - i) || (i === numberArray.length - i)) {
                return true;
            }
        } else {
            return false;
            break;
        }
    }
}

//


let arrayWithNumbers = [1, 2, 5];
let longGross = 0;
let tempGross = 1;

function longStringNumber (arrayNumber){
    arrayNumber.forEach((item, i) => {
        if (arrayNumber[i] < arrayNumber[i+1]) tempGross++;
        else {
            tempGross = 1;
        }
        if (longGross < tempGross && tempGross > 1) {
            longGross = tempGross;
        }
    });
}

longStringNumber(arrayWithNumbers)
console.log(longGross)