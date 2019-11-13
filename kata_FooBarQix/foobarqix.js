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

function fooBarQix(value) {
  var names = new Map([
    ["3", "Foo"],
    ["5", "Bar"],
    ["7", "Qix"]
  ]);
  var str = "";
  names.forEach(function(name, factor) {
    if (value % factor === 0) {
      str += name;
    }
  });

  names.forEach(function(name, digit) {
    if (value.includes(digit)) {
      str += name;
    }
  });

  if (!value || typeof value !== "string") {
    return "";
  }
  if (!str) {
    return value;
  }
  return str;
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
expect(fooBarQix("10"), "Bar", "10 is divisible by 5");
expect(fooBarQix("13"), "Foo", "13 contains 3");
expect(fooBarQix("14"), "Qix", "14 is divisible by 7");
expect(fooBarQix("15"), "FooBarBar", "15 is divisible by 3 and 5, and contains 5");
expect(fooBarQix("17"), "QixQix", "17 contains 7");
expect(fooBarQix("21"), "FooQix", "21 is divisible by 3 and 7");








//
