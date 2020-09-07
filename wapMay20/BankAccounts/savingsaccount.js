/*jshint  esversion:6 */
/*global Account */

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    getInterest(){
        return this.interest;
    }

    /**
     *  deposits the interest amount into the
     account. The calculation for the amount is balance * interest / 100
     */
    addInterest(){
        const depAmount = this.getBalance() * this.interest/100;
        this.deposit(depAmount);
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        const acctString = super.toString();
        return acctString + " Interest rate is: " + this.interest;
    }

}