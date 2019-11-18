function expect(actual, expected, msg) {
  console.log(msg);
  if (actual !== expected) {
    console.error(" Expected " + expected + " but got " + actual);
  }
}
