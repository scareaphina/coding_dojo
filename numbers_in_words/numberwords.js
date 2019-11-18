setTimeout(() => window.location = window.location, 2000);


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

function numbertoWord(n) {
  if (n === "") return ("Error - Invalid input.");
  else if (n === 0) return ("zero");
  else if (n < 0) return ("Error - Negative number.");
  else return millions(n);
}

function millions(n) {
  if (n >= 1000000) {
    return millions(Math.floor(n / 1000000)) + " million " + thousands(n % 1000000);
  } else {
    return thousands(n);
  }
}

function thousands(n) {
  if (n >= 1000) {
    return hundreds(Math.floor(n / 1000)) + " thousand " + hundreds(n % 1000);
  } else {
    return hundreds(n);
  }
}

function hundreds(n) {
  if (n > 99) {
    return base[Math.floor(n / 100)] + " hundred " + doubles(n % 100);
  } else {
    return doubles(n);
  }
}

function doubles(n) {
  if (n < 10) return base[n];
  else if (n >= 10 && n < 20) return teens[n - 10];
  else {
    return tens[Math.floor(n / 10)] + " " + base[n % 10];
  }
}

function singles(n) {
  if (n < 10) return base[n];
  else if (n >= 10 && n < 20) return teens[num - 10];
  else {
    return tens[Math.floor(n / 10)] + " " + base[num % 10];
  }
}













expect(typeof numbertoWord, "function", "The function numbertoWord exists.");
expect(numbertoWord(""), "Error - Invalid input.", "No arguments should give us an error.");
expect(numbertoWord("1"), "one", "1 should give one.");
expect(numbertoWord("10"), "ten", "10 should give ten.");
expect(numbertoWord("15"), "fifteen", "15 should give fifteen.");
expect(numbertoWord("20"), "twenty", "20 should give twenty.");
expect(numbertoWord("100"), "one hundred", "100 should give one hundred.");
expect(numbertoWord("101"), "one hundred one", "101 should give one hundred one.");
expect(numbertoWord("113"), "one hundred thirteen", "113 should give one hundred thirteen");
expect(numbertoWord("1000"), "one thousand", "1000 should give one thousand");
