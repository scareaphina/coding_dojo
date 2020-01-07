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
