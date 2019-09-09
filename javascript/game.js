// make an array of words
const word = [
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

var randNum = Math.floor(Math.random() * word.lenth);
var chosenWord = word[randNum];
var underScore = [];
var generateUnderscore = () => {
for(var i = 0; i < chosenWord.length; i++){
    underscore.push('_');
}
return underScore;
}

console.log(generateUnderscore());