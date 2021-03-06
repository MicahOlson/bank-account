function Account(firstNameFromUser, lastNameFromUser) {
  this.firstName = firstNameFromUser;
  this.lastName = lastNameFromUser;
  this.balance = 0; 
}

Account.prototype.makeDeposit = function(depositAmount) {
  this.balance += Math.abs(parseFloat(depositAmount));
  return "Deposit of $" + depositAmount + " made. Your new balance is: " + this.balance;
}

Account.prototype.makeWithdrawal = function(withdrawalAmount) {
  this.balance -= Math.abs(parseFloat(withdrawalAmount));
  return "Withdrawal of $" + withdrawalAmount + " complete. Your new balance is: " + this.balance;
}

Account.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
