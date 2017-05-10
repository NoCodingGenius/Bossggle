//A function to get the ID and puts the possible letters in the ID

var letCon1 = [];
var letCon2 = [];

function getLetter(){
  var word = event.target.innerHTML
  letCon1.push(word);
  letCon2 = letCon1.join("");
  document.getElementById("word").innerHTML = letCon2;
}

//when i click any particular button
//grab its innerHtml

//Change button color to orange when clicked
var question = document.querySelectorAll('.btn');

function myColor(){
  this.style.backgroundColor = 'orange';
  this.disabled = true;
}

for (var i = 0; i < question.length; i++){
  question[i].addEventListener('click', myColor)
}

//A function to clear the board

function clearWord() {
  document.getElementById("word").textContent = "Word";
  console.log( letCon2 )
  letCon1 = [];
  letCon2 = [];
  for (var i = 0; i < question.length; i++){
      question[i].style.backgroundColor = 'grey';
      question[i].disabled = false;
  }
}

function submitWord() {
  document.getElementById("setofwords") = letCon2;
  letCon1 = [];
  letCon2 = [];
  document.getElementById("word").textContent = "Word";
}

//A Function to generate random letters when the board is reset


function randomLetter() {
  alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  var emptyString = emptyString + getRandomLetter;


  document.getElementsByClassName('btn').textContent = emptyString;
}
//A function to generate a random vowel


function randomVowel() {

}
