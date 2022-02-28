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

    /* Event listener is being added to every item but
     * function is only added to last item.
     */
    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.toggle("hovered");
    });
  }
}

console.log(gridItem.classList);
