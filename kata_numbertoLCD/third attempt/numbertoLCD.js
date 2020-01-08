function toLCD(n) {
  var num = n.toString();

  var head = "";
  var shoulders = "";
  var knees = "";
  var toes = "";

  for (var i = 0; i < num.length; i++) {
    var int = parseInt(num[i], 10);

    head = head + digits[int][0];
    shoulders = shoulders + digits[int][1];
    knees = knees + digits[int][2];
    toes = toes + digits[int][3];
  }

  return [head, shoulders, knees, toes];
}

describe('lcd project', function() {
  it('single digits', function() {
    unitjs.value(digits[0]).is(toLCD(0));
    unitjs.value(digits[8]).is(toLCD(8));
  });

  it('multiple digits', function() {
    var expected =
    [' _  _ ',
     '|_|| |',
     '|_||_|',
     '      '];

     unitjs.value(expected).is(toLCD(80));
  });
});
