var output = [];
var count = 1;

function fizzBuzz() {

  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FIZZBUZZ");
    } else if (count % 3 === 0) {
      output.push("FIZZ");
    } else if (count % 5 === 0) {
      output.push("BUZZ");
    } else {
      output.push(count);
    }

    count++;
    console.log(output);
  }
}


// second attempt

// create an empty array and counter

var output = [];
var count = 1;

function FizzBuzz() {

  // have function run for numbers less than 100

  while (count <= 100) {

  // set push of fizzbuzz/fizz/buzz for numbers divisible by 3 and 5, 3, 5, and default regular output of pushing the count and increasing afterward

    if (count % 3 === 0 && count % 5 === 0)
    output.push("FIZZBUZZ");
    else if (count % 3 === 0)
    output.push("FIZZ");
    else if (count % 5 === 0)
    output.push("BUZZ");
    else
    output.push(count);

  count++;
  console.log(output);  
  }
}
