document.getElementById("Button").addEventListener("click", function () {
  const note = parseFloat(document.getElementById("note1").value);
  const note2 = parseFloat(document.getElementById("note2").value);
  const note3 = parseFloat(document.getElementById("note3").value);
  const note4 = parseFloat(document.getElementById("note4").value);

  const average = (note + note2 + note3 + note4) / 4;

  document.getElementById("result").innerText = "Average: " + average;
});
