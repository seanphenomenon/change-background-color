// variables
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["violet", "red", "green", "yellow", "pink", "blue", "orange"];

// button on click event
button.addEventListener("click", changeBackground());

//function on click
function changeBackground() {
  const colorIndex = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = colorIndex;
  console.log("Yay you clicked the button!");
}
