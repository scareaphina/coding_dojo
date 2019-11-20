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
  document.getElementById("myTable").deleteRow(3);
}
