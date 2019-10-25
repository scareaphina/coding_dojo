/*
DESIRED RESULT
numberToWord(321);
three hundred and twenty one

numberToWord(1234);
one thousand, two hundred and thirty four
*/

// 1. create an array for number words

function numberToWord(n) {

  var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  var words = ["", "", "", "hundred", "thousand", "million", "billion", "trillion"];

  // 2. create a variable to create a number string

  var nString = n.toString();

  // 3. create if statements to deal with negative numbers and zero

  if (n < 0) return ("Error - Negative number.");
  if (n === 0) return ("zero");

  // 4. create an if statement to deal with numbers under 20
  if (n < 20) {
    return base[n];
  }

  // 5. create an if statement for numbers over 20 but under 100
  if (nString.length === 2) {
    return tens[nString[0]] + " " + base[nString[1]];
  }

// helper function for base Numbers
// loop over to determine the length and give the correct wording

// put tests around each function

// helper for the other answers - numbers following numbers rather than zeros

  // 6. create an if statement for numbers of over 100
  if (nString.length == 3) {
    if (nString[1] === "0" && nString[2] === "0")
      return base[nString[0]] + " hundred";
    else
      return base[nString[0]] + " hundred and " + tens[nString[1]] + base[nString[2]];
  }

  // 7. create an if statement for numbers of over 1000
  if (nString.length == 4) {
    if (nString[1] === "0" && nString[2] === "0" && nString[3] === "0")
      return base[nString[0]] + " thousand";
    else
      return base[nString[0]] + " thousand, " + base[nString[1]] + " hundred and " + tens[nString[2]] + " " + base[nString[3]];
  }

  // 8. create an if statement for numbers of over 1000000


  // 9. console log the results
  console.log(n);
}

// BONUS: take the whole string, have a counter that counts down from total length to zero - try after i get this done once all the way through
