"use strict"
/* global exports */
exports.Accumulator = Accumulator;

/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
this.currentValue = initialValue;
this.increment = increment;
this.accumulate = () => this.currentValue += increment;
this.report = () =>  this.currentValue;

}