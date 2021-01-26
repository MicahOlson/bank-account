function Account(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = 0;
}

Account.prototype.makeDeposit = function(deposit) {
  this.balance += parseFloat(deposit);
  return "Deposit of $" + deposit + " made. Your new balance is: " + this.balance;
}