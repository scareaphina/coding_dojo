function insertRow() {

  var table = document.getElementById("myTable").insertRow(0);

  var cell1 = table.insertCell(0);
  var cell2 = table.insertCell(1);

  cell1.innerHTML = "New Cell 1";
  cell2.innerHTML = "New Cell 2";

}

function deleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
