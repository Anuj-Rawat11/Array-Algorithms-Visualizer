// -------------------------------------String Visualizer---------------------------------------------
const mainstring = document.getElementById("mainstring");
const substring = document.getElementById("substring");
const displaymain = document.getElementById("displaymain");
const displaysub = document.getElementById("displaysub");
const animspeed = document.getElementById("speed");
const brute = document.getElementById("brute");
const kmp = document.getElementById("kmp");
const underline = document.getElementsByClassName("underline");
const out = document.getElementById("out");
const dislps = document.getElementById("dislps");
// console.dir(mainstring);
// console.log(mainstring.innerHTML);
mainstring.addEventListener("keyup", function (e) {
  displaymain.innerHTML = e.target.value;
});
substring.addEventListener("keyup", function (e) {
  displaysub.innerHTML = e.target.value;
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
brute.addEventListener("click", async () => {
  // console.log("Helo");
  const speed = document.getElementById("speed");
  out.innerText = "Finding substring...";
  underline[0].innerHTML = "";
  underline[1].innerHTML = "";
  const mainstr = mainstring.value;
  const substr = substring.value;

  let ptr1 = 0;
  let ptr2;
  let flag;
  while (ptr1 <= mainstr.length - substr.length + 1) {
    ((ptr2 = 0), (flag = 1));
    let tempptr = ptr1 + 1;
    // console.log(substr);
    for (i = 0; i < ptr1; i++) {
      underline[0].innerHTML += "&nbsp";
    }
    // console.log(i);
    // underline[0].innerText += " ";

    // console.log("{"+underline[0].innerText+"}")
    while (ptr2 < substr.length) {
      // console.log("1");
      if (mainstr[ptr1] !== substr[ptr2]) {
        flag = 0;
        underline[0].innerHTML += "_";
        underline[1].innerHTML += "_";

        // console.log("["+ptr1+","+ptr2+"]");
        await delay(Number(speed.value));
        break;
      }
      underline[0].innerHTML += "_";
      underline[1].innerHTML += "_";

      (ptr1++, ptr2++);
      await delay(Number(speed.value));
    }

    if (flag) {
      console.log("Substring found");
      out.innerText = "Substring Found";
      break;
    }
    underline[0].innerHTML = "";
    underline[1].innerHTML = "";
    console.log(underline[0].innerText);
    ptr1 = tempptr;
  }
});

kmp.addEventListener("click", async () => {
  underline[0].innerHTML = "";
  underline[1].innerHTML = "";
  dislps.innerHTML = "";
  const mainstr = mainstring.value;
  const substr = substring.value;
  const lps = [];
  for (i = 1; i <= substr.length; i++) {
    lps.push(0);
    const lpsel = document.createElement("div");
    lpsel.innerText = "0";
    lpsel.classList.add("lpsel");
    dislps.appendChild(lpsel);
  }
  const elements = document.getElementsByClassName("lpsel");
  let pre = 0,
    suf = 1;
  while (suf < substr.length) {
    if (substr[pre] === substr[suf]) {
      lps[suf] = pre + 1;
      elements[suf].innerText = `${lps[suf]}`;
      (pre++, suf++);
    } else {
      if (pre === 0) {
        suf++;
      } else {
        pre = lps[pre - 1];
      }
    }
  }
  let p1 = 0,
    p2 = 0;
  while (p1 < mainstr.length && p2 < substr.length) {
    if (mainstr[p1] === substr[p2]) {
      (p1++, p2++);
      underline[0].innerHTML += "_";
      underline[1].innerHTML += "_";
    } else {
      if (p2 === 0) {
        p1++;
        underline[0].innerHTML += "&nbsp";
      } else {
        p2 = lps[p2 - 1];
        underline[1].innerHTML = "";
        console.log("{");
        for (i = 0; i < p2; i++) {
          console.log("-");
          underline[1].innerHTML += "_";
        }
        console.log("}");
        console.log("{" + p1 + "," + p2 + "}");
        console.log(typeof underline[0].innerHTML);
        underline[0].innerHTML = "";
        for (j = 0; j < p1 - p2; j++) {
          underline[0].innerHTML+= "&nbsp";
        }
        for(k=0;k<p2;k++){
          underline[0].innerHTML+="_";
        }
      }
    }
    await delay(2000);
    console.log("Check");
  }
  if (p2 === substr.length) {
    console.log("Substring found");
    out.innerText="Substring Found...";
  } else {
    console.log("Substring not found...");
    out.innerText="Substring not found...";

  }
});
