let values;
let colors;

// const values = [];

const colorpool = [
  "Black",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkViolet",
  "DimGray",
  "FireBrick",
  "Indigo",
  "Maroon",
  "MidnightBlue",
  "Navy",
  "Olive",
  "SaddleBrown",
  "Sienna",
  "Teal",
];

let colorset = new Set();

const newarr = document.getElementById("newarr");
const speed = document.getElementById("speed");

const valueSet = new Set();

// values.forEach(function () {
//   let oldlength = colorset.size;
//   let randomColorName;
//   while (colorset.size != oldlength + 1) {
//     randomColorName = colorpool[Math.floor(Math.random() * colorpool.length)];
//     colorset.add(randomColorName);
//   }
//   colors.push(randomColorName);
//   console.log(colors);
// });
// const colors = [
//   "red",
//   "green",
//   "purple",
//   "orange",
//   "blue",
//   "darkgreen",
//   "teal",
//   ""
// ];
const array = document.querySelector(".array");
// const sizebox = document.getElementById("size");
// const elementbox = document.getElementById("elements");
const inselement = document.getElementById("inselement");
const newelement = document.getElementById("newelement");

// function addElements() {
//   array.innerHTML = "";
// }

// inselement.addEventListener("click", () => {
//   // console.log(newelement.value);
//   values.push(newelement.value);
//   addElements();
// });

var temp;

// Adding bars

const bubbleButton = document.querySelector("button#bubble");
const selectionButton = document.querySelector("button#selection");
const insertionButton = document.querySelector("button#insertion");
const pass = document.getElementById("pass");
// console.log(button);
// var counter = 0;

function createArray() {
  values.forEach((e, index) => {
    // const randomColorName = colors[Math.floor(Math.random() * colors.length)];
    const element = document.createElement("div");
    element.classList.add("elements");
    // console.log(element);
    element.style.height = `${e}px`;
    element.innerText = `${e}`;
    element.style.backgroundColor = colors[index];
    array.appendChild(element);
  });
}
