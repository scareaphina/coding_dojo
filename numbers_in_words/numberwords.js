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

function numberToWord (n) {

var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// 2. create an array for number modifiers

var numType = ["", "hundred", "thousand", "million", "billion", "trillion"];

// 3. create a variable to create a number string

var numString = num.toString();

// 4. create if statements to deal with negative numbers and zero

if (n < 0) return("Error - Negative number.");
if (n === 0) return("zero");

// 5. create an if statement to deal with numbers under 20


// 6. create an if statement for numbers over 20 but under 100


// 7. create an if statement for numbers of over 100


// 6. create a function to replace numbers with the words in the array


// 7. console log the results


}
