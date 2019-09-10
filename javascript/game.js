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
  "volvo"
];

// choose word randomly

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

//testing
console.log(chosenWord);

// create underscores based on length of word
var generateunderScore = () => {
  for (var i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
};
console.log(generateunderScore());

// get users guess
document.addEventListener('keypress', event => {
  console.log(event.key);
  var keyword = String.fromCharCode(event.keycode);
  console.log(keyword);
  // if user guess is correct
  
  if(chosenWord.indexOf(keyword) > -1); {
    console.log(true);
    
     wrongWord.push(keyword);
    console.log(wrongWord);
   
    }
  }
})


