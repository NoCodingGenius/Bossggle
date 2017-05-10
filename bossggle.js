//Variables necessary
var letterContainer1 = [];
var letterContainer2 = [];
var letterContainer3 = [];
var letterContainer4 = [];
var letterContainer5 = [];

//A function to get the ID and puts the possible letters in the ID
function getLetter(){
  var word = event.target.innerHTML
  letterContainer1.push(word);
  letterContainer2 = letterContainer1.join("");
  document.getElementById("word").innerHTML = letterContainer2;
}

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
  letterContainer1 = [];
  letterContainer2 = [];
  for (var i = 0; i < question.length; i++){
      question[i].style.backgroundColor = 'grey';
      question[i].disabled = false;
  }
}

//A function to submit the word and receive points
function submitWord() {
  letterContainer3.unshift(letterContainer2, "<br>");
  letterContainer4 = letterContainer3.join("");
  letterContainer5.push(letterContainer2.length);
  document.getElementById("list").innerHTML = letterContainer4;
  document.getElementById("points").innerHTML = letterContainer5.reduce(add, 0) * 9;
  clearWord();
}

function add(a, b) {
    return a + b;
}

//A function to reset the word and scramble letters
function resetWord() {
  clearWord();
  letterContainer3 = [];
  letterContainer4 = [];
  letterContainer5 = [];
  document.getElementById("list").innerHTML = "";
  document.getElementById("points").innerHTML = "0";
  for (var i = 0; i < question.length; i++) {
    if ( i%5 == 0 ) {
    question[i].innerHTML = randomVowel();
  }
  else {
    question[i].innerHTML = randomLetter();
  }
}
}
//A Function to generate random letters when the board is reset
function randomLetter() {
  alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return getRandomLetter;
}
//A function to generate a random vowel
function randomVowel() {
  alphabet="AEIOU"
  var getRandomVowel = alphabet[Math.floor(Math.random() * alphabet.length)];
  return getRandomVowel;
}

window.onload = resetWord();
