/*

numberToWord(321);
three hundred and twenty one

what i need
1. an array with all of the words for the various numbers
2. an array for all the number modifiers (hundred, thousand)
3. something to make the numbers find their equivilant in that array
4. a function that iterates over the array and expresses the answer in a string

*/

// 1. create an array for number words

var base = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// 2. create an array for number modifiers

var numType = ["", "hundred", "thousand", "million", "billion", "trillion"];

// 3. create a variable to hold the value of the number sent

var number = [];

// 3. create a function to interate over the numWords array

// var findNumber = base[base.length-1];

function numberToWord(n) {
  if (n < 10) {
    return base[base.length-1];
  } else {
    return "Number is over 10.";
  }

  console.log(number);
}


// 4. create a function to replace numbers with the words in the array


// 5. console log the results
