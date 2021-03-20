"use strict"
/* global exports require*/
exports.Calculator = Calculator;
const prompt = require("prompt-sync")();

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
    this.a = 0,
    this.b = 0,
    this.sum = function(){return this.a + this.b; },
    this.read = function(){ 
      this.a = +prompt("enter a value:");
      this.b = +prompt("enter a value:");
    };
  }