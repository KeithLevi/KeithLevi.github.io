"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */ 
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && a > c) {return b;}
    if (b > c && a > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}

 
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const element of arr){
        tot += element;
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

    return tot;

}

