/*
DESIRED RESULT
numberToWord(321);
three hundred and twenty one

numberToWord(1234);
one thousand, two hundred and thirty four
*/

function numberToWord(n) {
  
  // 1. create arrays for number words

  var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  var words = ["", "", "", "hundred", "thousand", "million", "billion", "trillion"];

  // 2. create a variable to turn number into string

  var nString = n.toString();

}

// 3. create helper functions to deal with negative numbers and zero

function negatives() {
  if (n < 0) return ("Error - Negative number.");
}

function zero() {
  if (n === 0) return ("zero");
}

// 4. create a helper function to deal with numbers under 20

function singles() {
  if (n < 20) {
    return base[n];
  }
}

// 5. create a helper function for numbers over 20 but under 100

function doubles(n) {
  if (nString.length === 2) {
    return tens[nString[0]] + " " + base[nString[1]];
  }
}

// 6. create a helper function for numbers of over 100

function hundreds() {
  if (nString.length == 3) {
    if (nString[1] === "0" && nString[2] === "0")
      return base[nString[0]] + " hundred";
    else
      return base[nString[0]] + " hundred and " + tens[nString[1]] + base[nString[2]];
  }
}

// 7. create a helper function for numbers of over 1000

function thousands() {
  if (nString.length == 4) {
    if (nString[1] === "0" && nString[2] === "0" && nString[3] === "0")
      return base[nString[0]] + " thousand";
    else
      return base[nString[0]] + " thousand, " + base[nString[1]] + " hundred and " + tens[nString[2]] + " " + base[nString[3]];
  }
}

// 8. create a helper function for numbers of over 1000000

function millions() {
  if (nString.length == 7) {
    if (nString[1] === "0" && nString[2] === "0" && nString[3] === "0" && nString[4] === "0" && nString)
      return base[nString[0]] + " thousand";
    else
      return base[nString[0]] + " thousand, " + base[nString[1]] + " hundred and " + tens[nString[2]] + " " + base[nString[3]];
  }
}

// 9. create a helper function for numbers followed by all zeros

function zeros() {
  
}

// helper function for base Numbers
// loop over to determine the length and give the correct wording

// put tests around each function

// BONUS: take the whole string, have a counter that counts down from total length to zero - try after i get this done once all the way through
