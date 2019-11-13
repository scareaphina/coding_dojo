function expect(actual, expected, msg) {
  console.log(msg);
  if (actual !== expected) {
    console.error(" Expected " + expected + " but got " + actual);
  }
}
setTimeout(() => window.location = window.location, 2000);

//////////

var output = [];
var count = [1];

function namedFactors(names, value) {
  return Array.from(names.keys())
    .filter((factor) => (value % factor === 0))
    .map((factor) => names.get(factor))
    .join("");
}

function hasFactorAsDigit(names, value) {
  return value.split("").filter(function(digit) {
    return names.has(digit);
  }).length > 0;
}

function namedDigits(names, value) {
  return value.split("").map(function(digit) {
      return names.get(digit) ||
        (digit === "0"
        ? "*"
        : "");
  }).join("");
}

function fooBarQix(value) {

  if (!value || typeof value !== "string") {
    return "";
  }

  var names = new Map([
    ["3", "Foo"],
    ["5", "Bar"],
    ["7", "Qix"]
  ]);

  var str = namedFactors(names, value);

  var suffix = namedDigits(names, value);

  if (!str && !(suffix.replace("*", ""))) {
    return value.replace("0", "*");
  }
  return str + suffix;
}




expect(typeof fooBarQix, "function", "The fooBarQix function exists");
expect(fooBarQix(), "", "No arguments should give us an empty string");
expect(fooBarQix("1"), "1", "1 should give 1");
expect(fooBarQix(1), "", "Only strings should be accepted");
expect(fooBarQix("2"), "2", "2 should give 2");
expect(fooBarQix("3"), "FooFoo", "3 is divisible by 3, and contains 3");
expect(fooBarQix("5"), "BarBar", "5 is divisible by 5, and contains 5");
expect(fooBarQix("6"), "Foo", "6 is divisible by 3");
expect(fooBarQix("7"), "QixQix", "7 is divisible by 7, and contains 7");
expect(fooBarQix("10"), "Bar*", "10 is divisible by 5 and the zero converts to *");
expect(fooBarQix("13"), "Foo", "13 contains 3");
expect(fooBarQix("14"), "Qix", "14 is divisible by 7");
expect(fooBarQix("15"), "FooBarBar", "15 is divisible by 3 and 5, and contains 5");
expect(fooBarQix("17"), "Qix", "17 contains 7");
expect(fooBarQix("21"), "FooQix", "21 is divisible by 3 and 7");
expect(fooBarQix("33"), "FooFooFoo", "33 is divisible by 3 and contains two 3s");
expect(fooBarQix("51"), "FooBar", "51 is divisible by 3 and contains 5");
expect(fooBarQix("53"), "BarFoo", "51 contains 5 and 3");
expect(fooBarQix("101"), "1*1", "101 contains a 0 which converts to *");
expect(fooBarQix("303"), "FooFoo*Foo", "303 is divisible by 3, contains two 3s and the 0 converts to *");



//
