"use strict";
/* global assert */

// eslint-disable-next-line require-jsdoc
function topSalary(salaries) {
    let arr = Object.entries(salaries);
    let maxEntry = [null, 0];
    const result = arr.reduce((maxEnt, entry) => (entry[1] > maxEnt[1]) ? entry : maxEnt, maxEntry);
    return result[0];
}