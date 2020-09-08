"use strict";
/* global pow assert max3 */
describe("max3", function() {

    it("max of 1 2 3 is 3", function() {
      assert.equal(3, max3(1, 2, 3));
    });

    it("max of 5  4 -444 is 5", function() {
        assert.equal(5, max3(5, 4, -44));
      });
  
 
  
  });