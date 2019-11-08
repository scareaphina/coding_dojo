/*
DESIRED RESULT
numberToWord(321);
three hundred and twenty one

numberToWord(1234);
one thousand, two hundred and thirty four
*/

var base = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function negatives(n) {
  if (n < 0) return ("Error - Negative number.");
}

function zero(n) {
  if (n === 0) return ("zero");
  else return millions(n);
}

function singles(n) {
  if (n < 10) return base[n];
  else if (n >= 10 && n < 20) return teens[num - 10];
  else {
    return tens[Math.floor(n / 10)] + " " + base[num % 10];
  }
}
