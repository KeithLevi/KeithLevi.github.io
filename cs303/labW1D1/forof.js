"use strict";

/* sum the values of the matrix using indexed loops and then for of loops */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let total = 0;
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length ; j++){
        total += matrix[i][j];
    }
}
console.log("expect 45 : ", total);

let total2 = 0;
for (const innerMatrix of matrix){
    for (const number of innerMatrix){
        total2 += number;
    }
}
console.log("expect 45 again: ", total2);
