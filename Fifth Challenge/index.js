var model = document.querySelector("#model");
var button = document.querySelector("button");
var span = document.querySelector("span")[0];

function show() {
  model.style.display = "block";
}

function hide() {
  model.style.display = "none";
}
console.log(window);

window.onclick = function (event) {
  if (event.target == model) {
    model.style.display = "none";
  }
  console.log("S");
};
