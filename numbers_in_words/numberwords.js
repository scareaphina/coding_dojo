/*

DESIRED RESULT
numberToWord(321);
three hundred and twenty one

*/

// 1. create an array for number words

function numberToWord(n) {

var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// 2. create a variable to create a number string

var nString = n.toString();

// 3. create if statements to deal with negative numbers and zero

if (n < 0) return("Error - Negative number.");
if (n === 0) return("zero");

// 4. create an if statement to deal with numbers under 20
if (n < 20) {
  return base[n];
}

// 5. create an if statement for numbers over 20 but under 100
if (nString.length === 2) {
  return tens[nString[0]] + " " + base[nString[1]];
}

// 6. create an if statement for numbers of over 100


// 7. create a function to replace numbers with the words in the array


// 8. console log the results

console.log(n);
}
