function toLCD(n) {

  var num = n.toString();

  var chapeau = "";
  var mid = "";
  var bottom = "";
  var feet = "";

  for (var i = 0; i < num.length; i++) {

    var int = parseInt(num[i], 10);

    chapeau = chapeau + digits[int][0];
    mid = mid + digits[int][1];
    bottom = bottom + digits[int][2];
    feet = feet + digits[int][3];

  }

  return [chapeau, mid, bottom, feet];
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
























///// end
