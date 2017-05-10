//A function to get the ID and puts the possible letters in the ID
// function getWord ( ) {
//   var letterContainer = document.querySelectorAll('.btn')[i].innerText;
//   var letter = letterContainer.innerText
//   document.getElementById("word").innerHTML = letter;
// }

function getLetter(){
  var word = document.getElementById("word").innerHTML = event.target.innerHTML

  console.log(word.concat(event.target.innerHTML))
//Make this an array instead (above)

    // console.log( event.target.innerHTML )
}

//when i click any particular button
//grab its innerHtml
/*for ( var i=0; i<question.length; i++){
  question[i].addEventListener('click', myColor)
}*/

//Change button color to orange when clicked
var question = document.querySelectorAll('.btn');

function myColor(){
  this.style.backgroundColor = 'orange';
}

for ( var i=0; i<question.length; i++){
  question[i].addEventListener('click', myColor)
}

//A function to clear the board
function clearWord() {
  document.getElementById("word").textContent = "Word"
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
