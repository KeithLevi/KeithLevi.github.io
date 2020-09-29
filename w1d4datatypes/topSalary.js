"use strict";
/* global assert */
{
// eslint-disable-next-line require-jsdoc
function topSalary(salaries) {
    let arr = Object.entries(salaries);
    let maxEntry = [null, 0];
    const result = arr.reduce((maxEnt, entry) => (entry[1] > maxEnt[1]) ? entry : maxEnt, maxEntry);
    return result[0];
}

describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };

      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.isNull( topSalary({}) );
    });
  });

}