function createFunction() {

  var table = document.getElementById("myTable");

  var row = table.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHtml = "New Cell 1";
  cell2.innerHtml = "New Cell 2";

}

function deleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
