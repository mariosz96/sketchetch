const contain = document.querySelector("#skcontainer");
const playerbut = document.querySelector("#player-button");
const resetbut = document.querySelector("#reset-button");
const colorpick = document.querySelector("#colorpicker");
const pixels = document.querySelectorAll(".pixel");
const rainbow = document.querySelector("#rainbow");
let playerc = 16;
let check = false;

gridbut();
createGrid();
listener();

function listener() {
  window.addEventListener("mouseup", () => {
    if (check === true) {
      check = false;
    }
  });
  document.querySelectorAll(".pixel").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      if (check === true) {
        el.style.backgroundColor = colorpick.value;
      }
    });
  });
  colorpick.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        if (check === true) {
          el.style.backgroundColor = colorpick.value;
        }
      });
    });
  });
  rainbow.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        if (check === true) {
          el.style.backgroundColor = `rgb(
            ${getRandomArbitrary(0, 255)},
            ${getRandomArbitrary(0, 255)},
            ${getRandomArbitrary(0, 255)}
          )`;
        }
      });
    });
  });
  document.querySelectorAll(".pixel").forEach((el) => {
    el.addEventListener("mousedown", (e) => {
      check = true;
    });
  });
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function gridbut() {
  playerbut.addEventListener("click", () => {
    playerc = prompt("Enter a number between 2 and 100", "16");
    createGrid();
    listener();
  });

  resetbut.addEventListener("click", () => {
    playerc = 16;
    createGrid();
    listener();
  });
}

function createpixel() {
  const pixel = document.createElement("div");
  pixel.setAttribute("draggable", false);
  pixel.classList.add("pixel");
  pixel.style.width = 600 / playerc;
  pixel.style.height = 600 / playerc;
  contain.appendChild(pixel);
}

function createGrid() {
  while (contain.firstChild) {
    contain.firstChild.remove();
  }
  for (let x = 0; x < playerc; x++) {
    for (let y = 0; y < playerc; y++) {
      createpixel();
    }
  }
}
