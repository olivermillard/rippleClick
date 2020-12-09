// document.addEventListener("click", rippleClick);
document.addEventListener("mousemove", rippleClick);
var mainContainer = document.getElementById("mainContainer");
var svg = document.getElementById("svgID");

var colors = ["black", "green", "red", "orange", "blue", "purple", "gray"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rippleClick(event) {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const newCircles = async () => {
    for (var i = 0; i < 25; i += 1) {
      //   var prevCircle = document.getElementById("prevCircle");
      //   if (prevCircle) {
      //     svg.removeChild(prevCircle);
      //   }
      var circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      var color = getRandomInt(colors.length);
      circle.setAttributeNS(null, "cx", event.clientX);
      circle.setAttributeNS(null, "cy", event.clientY);
      circle.setAttributeNS(null, "r", i * 5);
      circle.setAttributeNS(null, "stroke", colors[color]);
      circle.setAttributeNS(null, "stroke-width", 2.5);
      circle.setAttributeNS(null, "fill", "none");
      circle.setAttributeNS(null, "id", "prevCircle");
      svg.appendChild(circle);
      await sleep(10);
    }
  };
  newCircles();
}
