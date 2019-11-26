function toLCD(n) {

  var num = n.toString();
  
  var tete = "";
  var epaules = "";
  var genoux = "";
  var pieds = "";

  for (var i = 0; i < num.length; i++) {

    var int = parseInt(num[i], 10);

    tete = tete + digits[int][0];
    epaules = epaules + digits[int][1];
    genoux = genoux + digits[int][2];
    pieds = pieds + digits[int][3];

  }

  return [tete, epaules, genoux, pieds];
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


///////////////
// second attempt

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
    unitjs.value(digits[1]).is(toLCD(1));
    unitjs.value(digits[2]).is(toLCD(2));
    unitjs.value(digits[3]).is(toLCD(3));
    unitjs.value(digits[4]).is(toLCD(4));
    unitjs.value(digits[5]).is(toLCD(5));
    unitjs.value(digits[6]).is(toLCD(6));
    unitjs.value(digits[7]).is(toLCD(7));
    unitjs.value(digits[8]).is(toLCD(8));
    unitjs.value(digits[9]).is(toLCD(9));
  });

  it('multiple digits', function() {
    var expected =
     [' _  _ ',
      '|_|| |',
      '|_||_|',
      '      '
    ];

    unitjs.value(expected).is(toLCD(80));

  });
});
