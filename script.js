const contain = document.querySelector("#skcontainer");
const playerbut = document.querySelector("#player-button");
const resetbut = document.querySelector("#reset-button");
const colorpick = document.querySelector("#colorpicker");
const pixels = document.querySelectorAll(".pixel");

let playerc = 16;

gridbut();
createGrid();
listener();

function listener() {
  document.querySelectorAll(".pixel").forEach(function (el) {
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = colorpick.value;
    });
  });
}

function gridbut() {
  playerbut.addEventListener("click", () => {
    playerc = prompt("Enter a number between 2 and 100", "16");

    createGrid();
    listener();
  });

  resetbut.addEventListener("click", () => {
    createGrid();
    listener();
  });
}

function deleter() {
  while (contain.firstChild) {
    contain.firstChild.remove();
  }
}

function createpixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.width = 600 / playerc;
  pixel.style.height = 600 / playerc;
  contain.appendChild(pixel);
}

function createGrid() {
  deleter();

  for (let x = 0; x < playerc; x++) {
    for (let y = 0; y < playerc; y++) {
      createpixel();
    }
  }
}
