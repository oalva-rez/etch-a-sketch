let gridContainer = document.querySelector(".grid-container");
let gridRow;
let gridItem;

for (let i = 1; i <= 16; i++) {
  gridRow = document.createElement("div");
  gridRow.className = "grid-row";
  gridContainer.appendChild(gridRow);
  for (let x = 1; x <= 16; x++) {
    gridItem = document.createElement("div");
    gridItem.className = "grid-item hovered";
    gridRow.appendChild(gridItem);
    gridItem.addEventListener("mouseover", (e) => {
      e.path[0].classList.toggle("hovered");
    });
  }
}
