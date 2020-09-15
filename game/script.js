function checkGuess() {
  var theNumber = 71; //set answer to 71
  var num = document.getElementById('guess').value;
  var input = document.querySelector('input');
  var response = '';
  if (num == theNumber) { //guess exact
    alert('You got it! The number is 71!');
  } else if (num > theNumber) { //guess too high
    alert('Nope, ' + num + ' is too high! Please try again!');
    input.value = '';  //clear input for next attempt
  } else if (num < theNumber) { //guess too low
    alert('Sorry, ' + num + ' is too low! Keep trying!');
    input.value = ''; //clear input for next attempt
  }
}