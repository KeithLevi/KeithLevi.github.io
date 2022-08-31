"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser

module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply, generateArray, findLongestWord}; //add all of your function names here that you need for the node mocha tests
*/ 
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    return Math.max(a,b,c);
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const num of arr){
         tot = tot * num;
    }

    return tot;

}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
function findLongestWord(arr){
    let longest = 0;
    for (const word of arr){
        if (word.length > longest) {
            longest = word.length;
        }
    }

    return longest;
}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
function generateArray(rows, cols){
    const genArray = [];
    for (let i = 0; i < rows; i++) {
        /* create row i */
        const rowi = [];
        for (let j = 1; j <= cols; j++){
            rowi.push((i * cols) + j);
        }
        genArray.push(rowi);
    }

return genArray;
}