"use strict";
/* global calculator assert */
describe("calculator", function() {
  //alert('in describe');
   context("when 2 and 3 entered", function() {
      beforeEach(function() {
        sinon.stub(window, "prompt");
  
        prompt.onCall(0).returns("2");
        prompt.onCall(1).returns("3");
  
        calculator.read();
      });
  
      afterEach(function() {
        prompt.restore();
      });

     calculator.a = 3;
     calculator.b = 2;
  
      it("the sum is 5", function() {
        assert.equal(calculator.sum(), 5);
      });
  
      it("the multiplication product is 6", function() {
        assert.equal(calculator.mul(), 6);
      });
    });
  
  });