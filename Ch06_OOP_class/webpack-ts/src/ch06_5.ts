// static 靜態（可以被共用的東西？）

class Bank {
  private static balence: number = 1000
  static withdraw(money: number) {
    if (this.balence <= 0) return
    this.balence -= money
  }
  static getBalence() {
    return this.balence
  }
}

// const bb1 = new Bank()
// const bb2 = new Bank()
// Bank.balence = 99999
// console.log(Bank.balence);

function userAWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalence())
}

function userBWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalence())
}

userAWithdraw(200)
userAWithdraw(500)

