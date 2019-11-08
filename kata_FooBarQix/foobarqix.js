var output = [];
var count = [1];

const cases = {
  Foo: 3,
  Bar: 5,
  Qix: 7,
};

function fooBarQix() {
  if (count % 3 === 0)
    output.push("Foo");
  else if (count % 5 === 0)
    output.push("Bar");
  else
    output.push("*");
    
  count++;
  console.log(output);
}
