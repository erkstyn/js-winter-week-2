//part 1

function thisfunction() {

};

//part 2

function greeting() {
  console.log("Hello World!");

};

greeting(); 

//part 3

var headline = function() {
  console.log("Today, in cats gone catnip:");

}

headline();

//part 4

var doge = function(name) {
  console.log(name + " is the best pet in the whole wide word!");

}

doge("Lily");

//part 5

var greet = function(person) {
  return "Hello there " + person;

}

console.log(greet("Sally"));

//part 6

var string = function(phrase) {
  var reverse = "";
  for (var i = phrase.length -1; i >= 0; i-= 1) {
    if (phrase[i] !== "a" && phrase[i] !== "e" && phrase[i] !== "i" && phrase[i] !== "o" && phrase[i] !== "u") {   
    } reverse += phrase[i];
  } return reverse;
} 

console.log(string("make it so"));

