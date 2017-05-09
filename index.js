//Change button color to orange when clicked
var question = document.querySelectorAll('.btn1');

function myColor(){
  this.style.backgroundColor = 'blue';
}

for ( var i=0; i<question.length; i++){
  question[i].addEventListener('click', myColor)
}

//A function to get the ID and puts the possible letters in the ID
function getWord () {
  var letterContainer = document.querySelector('.btn1');
  var letter = letterContainer.innerText;
  document.getElementById("word").textContent = letter;
}

function clearWord() {
  document.getElementById("word").textContent = "Word"
}

function randomLetter() {
  alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  var emptyString = emptyString + getRandomLetter;
  document.getElementsByClassName('btn1').textContent = emptyString;
}

function randomVowel() {

}
