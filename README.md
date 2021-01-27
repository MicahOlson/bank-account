# Bank Account

### _This project was created solely for the education of the author(s) and is not in a complete or portfolio-ready state. It should not be considered representative of professional work._
\
[Epicodus](https://www.epicodus.com/) - [Intermediate JavaScript](https://www.learnhowtoprogram.com/intermediate-javascript) - [Week 1, Lesson 23](https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/address-book-movie-tickets-bank-account)
\
Date created: 2021-01-26

## Authors and Contributors
Authored by: Alan Call and Micah Olson 

## Description
_Practice: Bank Account_  
This website simulates an online bank where a user can create a new account, input their name and an opening balance, make deposits and withdrawals, and see their balance.  

Goals of this exercise are to practice: utilizing test-driven development (TDD); creating constructors functions and prototype methods;  organizing code into business logic and user interface logic (and applying logical segmentation within those groups); creating UI logic with jQuery to interact with an HTML front-end; implementing event propagation (bubbling) and delegation; styling with custom CSS and Bootstrap.

## Technologies Used
* HTML
* CSS (extended by Bootstrap 4.5.3)
* JavaScript (extended by jQuery 3.5.1)

## Tests
  ```
  Describe: Account()
    Test: "It will construct an account object"
    Code: let myAccount = new Account();
    Expect(myAccount).toEqual(Account {});

    Test: "It takes a firstName argument and constructs an object with the same property and its value"
    Code: let myAccount = new Account("John")
    Expect(myAccount).toEqual(Account {firstName: "John"});

    Test: "It takes a lastName argument and constructs an object with the same property and its value"
    Code: let myAccount = new Account("John", "Doe")
    Expect(myAccount).toEqual(Account {firstName: "John", lastName: "Doe"});

    Test: "It constructs an account object with an initial balance of 0"
    Code: let myAccount = new Account("John", "Doe")
    Expect(myAccount).toEqual(Account {firstName: "John", lastName: "Doe", balance: 0});

  Describe: makeDeposit(depositAmount)
    Test: "It takes a number as a string, converts it to the absolute value of a float and adds it to the account balance"
    Expect(myAccount.makeDeposit("150.50")).toEqual("Deposit of $150.50 made. Your new balance is: 150.5");
  
  Describe: makeWithdrawal(withdrawalAmount)
    Test: "It takes a number as a string, converts it to the absolute value of a float and subtracts it from the account balance"
    Expect(myAccount.makeWithdrawal("50.50")).toEqual("Withdrawal of $50.50 complete. Your new balance is: 100");

  Describe: fullName()
    Test: "It returns a concatenated string of firstName and lastName"
    Expect(myAccount.fullName()).toEqual("John Doe");
  ```

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Alan Call, Micah L. Olson &copy; 2021

## Contact Information
Alan Call alanmatthewcall@gmail.com  
Micah Olson micah.olson@protonmail.com  