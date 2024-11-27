let displayValue = "";
function valueAppend(e) {
  console.log("Number", e);
  displayValue += e;
  document.getElementById("subCalculate").value = displayValue;
}
function subCancle() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("subCalculate").value = displayValue;
}
function calculateTotal() {
  displayValue = eval(displayValue);
  console.log("Hanzala", displayValue);
  document.getElementById("totalCalculate").value = displayValue;
}

function clearData() {
  displayValue = "";
  document.getElementById("subCalculate").value = "";
  document.getElementById("totalCalculate").value = "";
}
