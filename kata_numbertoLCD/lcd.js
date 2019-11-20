function generateRow() {

  var table = document.getElementById("myTable").insertRow(0);

  var cell1 = table.insertCell(0);
  var cell2 = table.insertCell(1);
  var cell3 = table.insertCell(2);

  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";

}

function generateNumber() {
  var count;

  for (count = 0; count < 3; count++) {
    generateRow();
  }
}

function deleteFunction() {
  document.getElementById("myTable").deleteRow();
}

///////

var digits = {},
_0 =
' _ ' +
'| |' +
'|_|'
'   ',
_1 =
'   ' +
'  |' +
'  |' +
'   ',
_2 =
' _ ' +
' _|' +
'|_ ' +
'   ',
_3 =
' _ ' +
' _|' +
' _|' +
'   ',
_4 =
'   ' +
'|_|' +
'  |' +
'   ',
_5 =
' _ ' +
'|_ ' +
' _|' +
'   ',
_6 =
' _ ' +
'|_ ' +
'|_|' +
'   ',
_7 =
' _ ' +
'  |' +
'  |' +
'   ',
_8 =
' _ ' +
'|_|' +
'|_|' +
'   ',
_9 =
' _ ' +
'|_|' +
' _|' +
'   ';

digits[_0] = '0';
digits[_1] = '1';
digits[_2] = '2';
digits[_3] = '3';
digits[_4] = '4';
digits[_5] = '5';
digits[_6] = '6';
digits[_7] = '7';
digits[_8] = '8';
digits[_9] = '9';
