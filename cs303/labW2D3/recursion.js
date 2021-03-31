"use strict";
/* eslint-disable */
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


function sumTo(limit) {
    if (limit === 1) {
        return 1;
    } else {
        return limit + sumTo(limit - 1);
    }
}

function factorial(limit) {
    if (limit === 1) {
        return 1;
    } else {
        return limit * factorial(limit - 1);
    }
}

function fibonacci(num) {
    if (num === 1 || num === 0) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}




function outputList(list) {
    if (list.next === null) {
        console.log(list.value);
        return "1 2 3 4 printed to console";
    } else {
        console.log(list.value);
        return outputList(list.next);
    }
}

function outputListLoop(list) {
    // let nextNode = list;
    while (list.next !== null) {
        console.log(list.value);
        list = list.next;
    }
    console.log(list.value);
    return "1 2 3 4 printed to console";
}


/*
ref:  https://www.coursera.org/lecture/programming-languages/introduction-to-first-class-functions-aBIYM
https://www.coursera.org/lecture/programming-languages/accumulators-for-tail-recursion-4f7Tw
https://www.coursera.org/learn/programming-languages#syllabus
    it("recursive version returns [1, 2, 3, 4 ]", function () {
        assert.deepStrictEqual(recurse.list2Array(list), [1, 2, 3, 4 ]);
    });  //recursion that returns an accumulated list or data structure requires something like an accumulator or global variable
	     //that (generally?) makes it tail-recursive.  the accumulator holds the computation memory versus it being in the 
		 //call stack, as can be done with factorial, power, etc.  
*/
function list2Array(list) {
    let arr = [];
    function list2ArrayHelper(list, accumulator) {
        if (list.next === null) {
            accumulator.push(list.value);
            return accumulator;
        } else {
            accumulator.push(list.value);
            return list2ArrayHelper(list.next, accumulator);
        }
    }

    return list2ArrayHelper(list, []);
}

function reverseList(list){
    if (list.next === null) {
        console.log(list.value);
        return "4 3 2 1 printed to console";
    } else {
        const result = reverseList(list.next);
        console.log(list.value);
        return result;
    }
}

function reverseListLoop(list){
    const listVals = [];  //need to store in local array since do not have call stack
    while (list.next !== null) {
        listVals.push(list.value);
        list = list.next;
    }
    listVals.push(list.value);
    listVals.reverse();  //transpose in place
    listVals.forEach(val => console.log(val));
    return "4 3 2 1 printed to console";
}

