/*jshint  esversion:6 */
/*global Account, SavingsAccount */
class Bank {
    constructor() {
        this.accounts = [];
    }
    static nextNumber = 101; // number for the next account w

    addAccount() {
        const newAcct = new Account(Bank.nextNumber);
        Bank.nextNumber++;
        this.accounts.push(newAcct);
        return Bank.nextNumber - 1;
    }

    addSavingsAccount(interest) {
        const newAcct = new SavingsAccount(Bank.nextNumber, interest);
        Bank.nextNumber++;
        this.accounts.push(newAcct);
        return Bank.nextNumber - 1;
    }

    /**
     *  @returns {*|string} returns a String
     with each account on its own line
     *
     */
    accountReport() {
        const report = this.accounts.reduce( (report, account) => report + "\n" + account.toString());
        return report;
    }


}