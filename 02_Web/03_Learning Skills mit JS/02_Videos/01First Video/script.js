document.getElementById("Button").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;


  if (isNaN(value1) || isNaN(value2)) {
    alert("invalid value");
  } else {
    const product = parseFloat(value1) + parseFloat(value2);
    document.getElementById("result").innerText = "Product: " + product; 
  }
  
  
});
document.getElementById("Button2").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;


  if (isNaN(value1) || isNaN(value2)) {
    alert("invalid value");
  } else {
    const product = parseFloat(value1) - parseFloat(value2);
    document.getElementById("result").innerText = "Product: " + product; 
  }
  
  
});
document.getElementById("Button3").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;


  if (isNaN(value1) || isNaN(value2)) {
    alert("invalid value");
  } else {
    const product = parseFloat(value1) * parseFloat(value2);
    document.getElementById("result").innerText = "Product: " + product; 
  }
  
  
});
document.getElementById("Button4").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;


  if (isNaN(value1) || isNaN(value2)) {
    alert("invalid value");
  } else {
    const product = parseFloat(value1) / parseFloat(value2);
    document.getElementById("result").innerText = "Product: " + product; 
  }
  
  
});