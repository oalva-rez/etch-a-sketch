let gridContainer = document.querySelector(".grid-container");
let clearGridBtn = document.querySelector(".clear-grid");
let gridRow;
let gridItem;
let dimension;

// On click event, remove 'hovered' class
clearGridBtn.addEventListener("click", () => {
  let item = document.querySelectorAll(".hovered");
  item.forEach((e) => {
    e.classList.remove("hovered");
  });
});

// prompt user for grid dimension
do {
  dimension = parseInt(
    prompt("Enter number of squares per side. Max number = 100.")
  );
} while (dimension < 0 || dimension > 100 || isNaN(dimension));

// create grid and append grid items
for (let i = 1; i <= dimension; i++) {
  gridRow = document.createElement("div");
  gridRow.className = "grid-row";
  gridContainer.appendChild(gridRow);
  for (let x = 1; x <= dimension; x++) {
    gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridRow.appendChild(gridItem);
    gridItem.addEventListener("mouseover", (e) => {
      e.path[0].classList.toggle("hovered");
    });
  }
}
