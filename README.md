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
[goal of this exercise].

## Technologies Used
* HTML
* CSS (extended by Bootstrap 4.5.3)
* JavaScript (extended by jQuery 3.5.1)

## Tests
  ```
  Describe: Account()
    Test: "It will construct an account object"
    Expect(new Account().toEqual(Account {});

    Test: "It takes a firstName argument and constructs an object with the same property and its value"
    Expect(new Account("John")).toEqual(Account {firstName: "John"});

    Test: "It takes a lastName argument and constructs an object with the same property and its value"
    Expect(new Account("John", "Doe")).toEqual(Account {firstName: "John", lastName: "Doe"});

    Test: "It constructs an account object with an initial balance of 0"
    Expect(new Account("John", "Doe")).toEqual(Account {firstName: "John", lastName: "Doe", balance: 0});

  Describe: makeDeposit()
    Test: "It takes in a string value, converts to a float and adds it to the account balance"
    Expect(makeDeposit("150.50").toEqual("Deposit of $150.50 made. Your new balance is: 150.5");
  ```

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Micah L. Olson, Alan Call &copy; 2021

## Contact Information
Alan Call alanmatthewcall@gmail.com  
Micah Olson micah.olson@protonmail.com  