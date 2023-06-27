function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastChar() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    let result = document.getElementById("result").value;
    let calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
  }