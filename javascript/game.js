// make an array of words
var word = [
  "acura",
  "aston martin",
  "audi",
  "bentley",
  "bmw",
  "bugatti",
  "buick",
  "cadillac",
  "cheverolet",
  "chrysler",
  "dodge",
  "ferrari",
  "fiat",
  "ford",
  "gmc",
  "honda",
  "hyundai",
  "infiniti",
  "jaguar",
  "jeep",
  "kia",
  "lamborghini",
  "land rover",
  "lexus",
  "lincoln",
  "maserati",
  "mazda",
  "mercedes",
  "mitsubishi",
  "nissan",
  "porsche",
  "rolls royce",
  "saab",
  "scion",
  "subaru",
  "suzuki",
  "tesla",
  "toyota",
  "volkswagen",
  "volvo"];

// choose word randomly

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var underScore = [];

// create underscores based on length of word

var generateunderScore = () => {
for(var i = 0; i < chosenWord.length; i++){
    underScore.push('_');
    }
    return underScore;
}

console.log(generateunderScore());
// get users guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
// check if users guess is correct
// if right, push to right array
// if wrong, push to wrong array