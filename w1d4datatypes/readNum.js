"use strict";

// eslint-disable-next-line require-jsdoc
function readNumber() {  //Repeat until the input is a number

    let num;
    do {
        const input = prompt("Enter a number please?", 0);
        num = parseFloat(input);
    } while (isNaN(num));
    return num;
}

const number = readNumber();

alert(number);