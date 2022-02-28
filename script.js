let gridContainer = document.querySelector(".grid-container");
let gridRow;
let gridItem;
let clearGridBtn = document.querySelector(".clear-grid");
let dimension;

clearGridBtn.addEventListener("click", () => {
  window.location.reload();
});

do {
  dimension = parseInt(
    prompt("Enter number of squares per side. Max number = 100.")
  );
} while (dimension < 0 || dimension > 100 || isNaN(dimension));

for (let i = 1; i <= dimension; i++) {
  gridRow = document.createElement("div");
  gridRow.className = "grid-row";
  gridContainer.appendChild(gridRow);
  for (let x = 1; x <= dimension; x++) {
    gridItem = document.createElement("div");
    gridItem.className = "grid-item hovered";
    gridRow.appendChild(gridItem);
    gridItem.addEventListener("mouseover", (e) => {
      e.path[0].classList.toggle("hovered");
    });
  }
}
