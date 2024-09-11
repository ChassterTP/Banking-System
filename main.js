var balance = 0;

function banking() {
  var inquiry = prompt('Welcome to our Bank!. What would you like to do?\n\n1.) Deposit\n2.) Withdraw\n3.) Balance Inquiry');
  
  switch (inquiry) {
    
    case '1':
      var deposit = prompt('Enter an amount')*1;
      if (deposit > 0) {
        balance += deposit;
        var anotherTransaction = prompt('Your new balance is ₱' + balance + '. Would you like another transaction?.\n\n1.) Yes\n2.) No');
        if (anotherTransaction == 1) {
        banking();
        }
        else {
          alert('Thank you for making a transaction with us!.')
        }
      }
      else {
        var anotherTransaction = prompt('Invalid amount. Would you like another transaction?.\n\n1.) Yes\n2.) No');
        if (anotherTransaction == 1) {
        banking();
        }
        else {
          alert('Thank you for making a transaction with us!.')
        }
      }
      break;
      
    case '2':
      var withdraw = prompt('Enter an amount')*1;
      if (withdraw >= 1 && withdraw <= balance) {
        balance -= withdraw;
        var anotherTransaction = prompt('You have withdrawn ₱' + withdraw + '. Your new balance is ₱' + balance + '. Would you like another transaction?.\n\n1.) Yes\n2.) No');
        if (anotherTransaction == 1) {
          banking();
        }
        else {
          alert('Thank you for making a transaction with us!.')
        }
      }
      else if (withdraw > balance || withdraw <= -1){
        var anotherTransaction = prompt('You don\'t have enough balance. Would you like another transaction?.\n\n1.) Yes\n2.) No');
        if (anotherTransaction == 1) {
        banking();
        }
        else {
          alert('Thank you for making a transaction with us!.')
        }
      }
      else {
        var anotherTransaction = prompt('Invalid amount. Would you like another transaction?.\n\n1.) Yes\n2.) No');
        if (anotherTransaction == 1) {
        banking();
        }
        else {
          alert('Thank you for making a transaction with us!.')
        }
      }
      break;
      
    case '3':
      var anotherTransaction = prompt('Your new balance is ₱' + balance + '. Would you like another transaction?.\n\n1.) Yes\n2.) No');
      if (anotherTransaction == 1) {
        banking();
      }
      else {
        alert('Thank you for making a transaction with us!.')
      }
      break;
        
    default:
      var anotherTransaction = prompt('Invalid Input. Would you like to try again?\n\n1.) Yes\n2.) No');
      if (anotherTransaction == 1) {
        banking();
      }
      else {
        alert('Thank you for making a transaction with us!.')
      }
  }
}

banking();