//probably a better way to group these
//still not sure about style conventions here...

const box = document.getElementById("box");

function grow() {
  box.style.height = "250px";
  box.style.width = "250px";
};

function blue() {
  box.style.backgroundColor = "blue";
};

function fade() {
  box.style.opacity = ".3";
};

function reset() {
  box.style.opacity = "1";
  box.style.backgroundColor = "orange";
  box.style.height = "150px";
  box.style.width = "150px";
};

document.getElementById("button1").onclick = function() {grow()};
document.getElementById("button2").onclick = function() {blue()};
document.getElementById("button3").onclick = function() {fade()};
document.getElementById("button4").onclick = function() {reset()};
