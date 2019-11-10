var output = [];
var count = [1];

function fooBarQix(value) {
  var str = "";

  if (!value || typeof value !== "string") {
    return "";
  } if (value % 3 === 0) {
    str = "Foo";
  } if (value === "3") {
    str += "Foo";
  } if (value === "5") {
    str = "BarBar";
  } if (!str) {
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
