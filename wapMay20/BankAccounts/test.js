/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */

"use strict";

describe("account tests", function () {
    const testAccount = new Account(123);

    /*context("when 22 and 32 entered", function() {
       beforeEach(function() {
           /* sinon.stub(window, "prompt");

           prompt.onCall(0).returns("2");
           prompt.onCall(1).returns("3");    //probably returns this value whenever there is a window.prompt call -- i.e., a stub to replace the real call ?

            calculator.aVal = 32;
            calculator.bVal = 22;
        });

       afterEach(function() {
          prompt.restore();
        }); */


    it("initial balance is 0", function () {
        assert.equal(testAccount.getBalance(), 0);
    });

    it("deposit 100 and withdrawal 50", function () {
        testAccount.deposit(100);
        testAccount.withdraw(50);
        assert.equal(testAccount.getBalance(), 50);
    });

    it("toString works", function () {
        assert.equal(testAccount.toString(), "Account 123: balance 50");
    });


});

describe("SavingsAccount tests", function () {
    const testAccount = new SavingsAccount(1234, 10);

    it("interest rate is .1", function () {
        assert.equal(testAccount.getInterest(), 10);
    });

    it("deposit interest once", function () {
        testAccount.deposit(100);
        testAccount.addInterest();
        assert.equal(testAccount.getBalance(), 110);
    });

    it("toString works", function () {
        assert.equal(testAccount.toString(), "Account 1234: balance 110 Interest rate is: 10");
    });


});

describe("Bank tests", function () {
    const bank = new Bank();

    it("add simple account", function () {
        const accnum1 = bank.addAccount();
        assert.equal(accnum1, 101);
    });

    it("deposit savings account ", function () {
        const accnum2 = bank.addSavingsAccount(20);
        assert.equal(accnum2, 102);
    });

    it("report works", function () {
        console.log('report is: ' + bank.accountReport());
        assert.equal(bank.accountReport(), "Account 101: balance 0\nAccount 102: balance 0 Interest rate is: 20");

    });


});