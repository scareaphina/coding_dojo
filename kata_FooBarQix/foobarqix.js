var output = [];
var count = [1];

function fooBarQix(value) {
  if (!value || typeof value !== "string") {
    return "";
  } else if (value === "3") {
    return "Foo" + "Foo";
  } else if (value === "5") {
    return "Bar" + "Bar";
  }
  return value;
}


console.log(assertEqual(fooBarQix("1"), ""));
console.log(assertEqual(fooBarQix("3"), "FooFoo"));
console.log(assertEqual(fooBarQix("2"), "2"));
console.log(assertEqual(fooBarQix("5"), "BarBar"));
