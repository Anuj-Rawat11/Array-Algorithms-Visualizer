let values;
let colors;
let values2;
let colors2;

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
const newarr2 = document.getElementById("newarr2");
const speed = document.getElementById("speed");
const speed2 = document.getElementById("speed2");

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
const searcharray = document.querySelector(".search-array");
// const sizebox = document.getElementById("size");
// const elementbox = document.getElementById("elements");
const inselement = document.getElementById("inselement");
const newelement = document.getElementById("newelement");
const search = document.getElementById("search");

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
const linearButton = document.querySelector("button#linear");
const binaryButton = document.querySelector("button#binary");
const pass = document.getElementById("pass");
const comparison = document.getElementById("comparison");
const comparison2 = document.getElementById("comparison2");
const result = document.getElementById("result");
// console.log(button);
// var counter = 0;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createArray(arr, val, col) {
  val.forEach((e, index) => {
    // const randomColorName = colors[Math.floor(Math.random() * colors.length)];
    const element = document.createElement("div");
    element.classList.add("elements");
    // console.log(element);
    element.style.height = `${e}px`;
    element.innerText = `${e}`;
    element.style.backgroundColor = col[index];
    arr.appendChild(element);
  });
}

function moveElement(i) {
  const prom = new Promise(function (resolve, reject) {
    // console.log(elements[i]);
    // console.log(elements[i]);
    const animspeed = Number(speed.value);
    const elements = document.querySelectorAll(".elements");
    // elements[i].classList.add("compare");
    // elements[j].classList.add("compare");
    setTimeout(function () {
      elements[i + 1].style.height = `${values[i]}px`;
      elements[i + 1].style.backgroundColor = colors[i];
      elements[i + 1].innerText = `${values[i]}`;

      values[i + 1] = values[i];
      colors[i + 1] = colors[i];

      // temp = values[i];
      // values[i] = values[j];
      // values[j] = temp;

      // temp = colors[i];
      // colors[i] = colors[j];
      // colors[j] = temp;

      resolve("");
      // elements[i].classList.remove("compare");
      // elements[j].classList.remove("compare");
    }, speed.value);
  });
  return prom;
}
function swapElement(i, j) {
  const prom = new Promise(function (resolve, reject) {
    // console.log(elements[i]);
    // console.log(elements[i]);
    const animspeed = Number(speed.value);
    const elements = document.querySelectorAll(".elements");
    elements[i].classList.add("compare");
    elements[j].classList.add("compare");
    setTimeout(function () {
      elements[i].style.height = `${values[j]}px`;
      elements[i].style.backgroundColor = colors[j];
      elements[i].innerText = `${values[j]}`;

      elements[j].style.height = `${values[i]}px`;
      elements[j].style.backgroundColor = colors[i];
      elements[j].innerText = `${values[i]}`;

      temp = values[i];
      values[i] = values[j];
      values[j] = temp;

      temp = colors[i];
      colors[i] = colors[j];
      colors[j] = temp;

      resolve("");
      elements[i].classList.remove("compare");
      elements[j].classList.remove("compare");
    }, speed.value);
  });
  return prom;
}

function sortArray(){

const elements=document.getElementsByClassName("elements");
for (var i = 0; i < values2.length - 1; i++) {

    for (var j = 0; j < values2.length - i - 1; j++) {
      if (values2[j] > values2[j + 1]) {
       

  elements[j + 1].style.height = `${values2[j]}px`;
      elements[j + 1].style.backgroundColor = colors2[j];
      elements[j + 1].innerText = `${values2[j]}`;
  elements[j].style.height = `${values2[j+1]}px`;
      elements[j].style.backgroundColor = colors2[j+1];
      elements[j].innerText = `${values2[j+1]}`;

      // values2[j + 1] = values2[j];
      // colors2[j + 1] = colors2[j];

      // values2[j + 1] = values2[j];
      // colors2[j + 1] = colors2[j];

      temp = values2[j];
      values2[j] = values2[j+1];
      values2[j+1] = temp;

      temp = colors2[j];
      colors2[j] = colors2[j+1];
      colors2[j+1] = temp;

      // resolve("");
      // elements[i].classList.remove("compare");
      // elements[j].classList.remove("compare");
    }

        
      }
    }
  }




  

// async function swapE(index) {
//   await swapElement(index);
// }

function clearArray(arr) {
  arr.replaceChildren();
}
// function clearArray2() {
//   searcharray.replaceChildren();
// }

newarr.addEventListener("click", function () {
  searcharray.replaceChildren();
  pass.innerText = `Pass : `;
  const size = document.getElementById("size");
  if (valueSet.size != 0) {
    clearArray(array);
    valueSet.clear();
    colorset.clear();
  }
  while (valueSet.size != Number(size.value)) {
    valueSet.add(Math.floor(Math.random() * (300 - 50 + 1)) + 50);
  }
  values = [...valueSet];
  while (colorset.size != Number(size.value)) {
    randomColorName = colorpool[Math.floor(Math.random() * colorpool.length)];
    colorset.add(randomColorName);
  }
  colors = [...colorset];
  createArray(array, values, colors);
});

newarr2.addEventListener("click", function () {
  array.replaceChildren();
  // pass.innerText = `Pass : `;
  const ssize = document.getElementById("searchsize");
  // console.log(searcharray);
  if (valueSet.size != 0) {
    clearArray(searcharray);
    valueSet.clear();
    colorset.clear();
  }
  while (valueSet.size != Number(ssize.value)) {
    valueSet.add(Math.floor(Math.random() * (300 - 50 + 1)) + 50);
  }
  values2 = [...valueSet];
  while (colorset.size != Number(ssize.value)) {
    randomColorName = colorpool[Math.floor(Math.random() * colorpool.length)];
    colorset.add(randomColorName);
  }
  colors2 = [...colorset];
  createArray(searcharray, values2, colors2);
});

bubbleButton.addEventListener("click", async () => {
  const elements = document.querySelectorAll(".elements");
  // pass.style.color = "black";
  for (var i = 0; i < values.length - 1; i++) {
    pass.innerText = `Pass : ${i + 1}`;
    for (var j = 0; j < values.length - i - 1; j++) {
      comparison.innerText = `Comparing A[${j}] with A[${j + 1}]`;
      await delay(100);
      if (values[j] > values[j + 1]) {
        console.log(values[j], values[j + 1]);
        await swapElement(j, j + 1);
      }
    }
  }
  elements.forEach(function (element) {
    element.style.backgroundColor = "green";
  });
});

selectionButton.addEventListener("click", async () => {
  for (var i = 0; i < values.length - 1; i++) {
    pass.innerText = `Pass : ${i + 1}`;
    var tindex = i;
    for (var j = i + 1; j < values.length; j++) {
      comparison.innerText = `Comparing A[${tindex}] with A[${j}]`;
      if (values[tindex] > values[j]) {
        tindex = j;
      }
    }
    await swapElement(i, tindex);
  }
});

insertionButton.addEventListener("click", async () => {
  var i = 1;
  const elements = document.querySelectorAll(".elements");
  while (i < values.length) {
    pass.innerText = `Pass : ${i}`;
    j = i - 1;

    const tempValue = values[i];
    const tempColor = colors[i];
    console.log(values, j >= 0 && tempValue < values[j]);
    while (j >= 0 && tempValue < values[j]) {
      // console.log("In the loop...");

      await moveElement(j);
      j--;
    }
    elements[j + 1].style.height = `${tempValue}px`;
    elements[j + 1].style.backgroundColor = tempColor;
    elements[j + 1].innerText = `${tempValue}`;
    values[j + 1] = tempValue;
    colors[j + 1] = tempColor;
    i++;
  }
});

linearButton.addEventListener("click", async () => {
  const animspeed=Number(speed2.value);
  const elements = document.querySelectorAll(".elements");
  result.innerText = "Result : ";
  comparison2.innerText = "Comparing";
  for (let i = 0; i < values2.length; i++) {
    const tempcolor = colors2[i];
    elements[i].style.backgroundColor = "gray";
    comparison2.innerText = `Comparing A[${i}] with ${Number(search.value)}`;
    await delay(animspeed);
    if (values2[i] === Number(search.value)) {
      result.innerText = "Search Successful...";
      return;
    }
    elements[i].style.backgroundColor = `${tempcolor}`;
  }
  result.innerText = "Search Unsuccessful...";
});

binaryButton.addEventListener("click", async () => {
  sortArray();
  const animspeed=Number(speed2.value);
  await delay(200);
  const elements = document.querySelectorAll(".elements");
  result.innerText = "Result : ";
 comparison2.innerText = "Comparing ";
  let start, end, mid;
  start = 0;
  end = values2.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2); 
    comparison2.innerText = ` Comparing A[${mid}] with ${Number(search.value)}`;
       const tempcolor = colors2[mid];
    elements[mid].style.backgroundColor="gray";
    await delay(animspeed);
    if (values2[mid] === Number(search.value)) {
      result.innerText = "Search Successful...";
      elements[mid].style.backgroundColor=tempcolor;
      return;
    } else if (values2[mid] > Number(search.value)) {
      end = mid - 1;
      elements[mid].style.backgroundColor=tempcolor;
    } else {
      start = mid + 1;
      elements[mid].style.backgroundColor=tempcolor;
    }
  }

  result.innerText = "Search Unsuccessful...";
});
