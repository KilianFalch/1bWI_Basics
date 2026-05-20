let random;

document.getElementById("background").addEventListener(
  "click",
  setInterval(function () {
    random = `hsl(${Math.random() * 360},70%, 60%)`;
    document.body.style.backgroundColor = random;
  }, 1000),
);
