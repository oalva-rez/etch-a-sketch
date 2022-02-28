let gridContainer = document.querySelector(".grid-container");
let clearGridBtn = document.querySelector(".clear-grid");
let gridRow;
let gridItem;
let dimension;

// prompt user for grid dimension
do {
  dimension = parseInt(
    prompt("Enter number of squares per side. Max number = 100.")
  );
} while (dimension < 0 || dimension > 100 || isNaN(dimension));

// generate random rbg value
function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

// create grid and append grid items
for (let i = 1; i <= dimension; i++) {
  gridRow = document.createElement("div");
  gridRow.className = "grid-row";
  gridContainer.appendChild(gridRow);
  for (let x = 1; x <= dimension; x++) {
    gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridRow.appendChild(gridItem);
    // on hover event, style grid-item to random rbg value
    gridItem.addEventListener("mouseover", (e) => {
      e.path[0].style.backgroundColor = random_rgba();
    });
  }
}

// On click of button, style grid items back to aqua.
clearGridBtn.addEventListener("click", () => {
  let item = document.querySelectorAll(".grid-item");
  item.forEach((e) => {
    e.style.backgroundColor = "aqua";
  });
});
