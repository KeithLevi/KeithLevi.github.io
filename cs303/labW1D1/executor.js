"use strict";
const assert = require("assert");
/* eslint-disable */
/* write a function, executor(callback, par1, par2), and functions add(i, j) and mult(i, j) that add or multiply their arguments.  
executor(add, 5, 10) should use add to return 15 and executor(mult, 5, 10) should use mult to return 50. */

describe("executor", function(){

    it ("tests add", function(){
        assert.strictEqual(executor(add, 5, 10), 15);
    });

    it("tests mult", function(){
        assert.strictEqual(executor(mult, 5, 10), 50);
    });
});


function executor(callback, i, j){
    return callback(i, j);
}


function add(i, j){
    return i + j;
}

function mult(i, j){
    return i * j;
}