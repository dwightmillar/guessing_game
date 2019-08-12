var the_number;
var the_guess;

window.onload = function generateRandomNumber() {
  the_number = Math.ceil(Math.random() * 10);
}



function getInputSendResponse() {
  the_guess = document.getElementById('guess_input').value;
  console.log(the_number);

  if (the_guess < the_number) {
    document.getElementById('response_div').innerText = 'Too low!';
  }
  if (the_guess > the_number) {
    document.getElementById('response_div').innerText = 'Too high!';
  }
  if (the_guess == the_number) {
    document.getElementById('response_div').innerText = 'You guessed it!';
  }
}
