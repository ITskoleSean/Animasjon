var canvas = document.getElementById("circleFactory");
var pen = canvas.getContext("2d");
var text = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height / 2;
var radius = 8;
var color = "#FFFFFF";
var flashLight = canvas.getContext("2d");
var flashLightImage = document.getElementById("FL");
flashLightImage.style.transform = "scaleX(-1)";

const draw = () => {
  if (canvas.getContext) {
    text.fillText("HEISANN!", 100, 80);
    pen.beginPath();
    pen.arc(x, y, radius, 0, 2 * Math.PI, false);
    pen.lineWidth = 3;
    pen.strokeStyle = color;
    pen.stroke();
    pen.fillStyle = color;
    pen.fill();
    text.font = "30px Arial";
    text.fillStyle = "black";
  }
};

const move = () => {
  setInterval((e) => {
    if (x == -10) {
      x = x;
    } else {
      x = x - 10;
      radius = radius + 2;
      draw();
    }
  }, 100);
};
