//Change button color to orange when clicked
var question = document.querySelectorAll('.btn1');

function myColor(){
  this.style.backgroundColor = 'blue';
}

for ( var i=0; i<question.length; i++){
  question[i].addEventListener('click', myColor)
}

//A function to get the ID adn puts the possible letters in the ID
function getLetters () {
  var lettersContainer = document.querySelector('#word');
  var letters = lettersContainer.innerText;
  return letters;
}
//This function is to create the word
function updateWord (letters) {
  document.getElementByID("word").textContent= letters;
}
