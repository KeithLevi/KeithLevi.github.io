"use strict";

/**
 * @returns {number} returns a number
 */
function abc() {
    let xyz = 5;
    return xyz;
}

let bob = {
    name: 'bob',
    age: 10,
    friend: { name: 'joe', age: 8 }
}

alert(bob.name);
alert(bob.friend.name);

let arr = [1,2,3];
alert(arr.map(double));

// eslint-disable-next-line require-jsdoc
function double(arg1){return arg1 * 2;}