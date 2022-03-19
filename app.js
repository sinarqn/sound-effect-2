const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const colors = [
  "#FF00FF", //1
  "#FF00E1", //2
  "#FF00BB", //3
  "#FF009D", //4
  "#FF0087", //5
  "#FF0072", //6
  "#FF005B", //7
  "#FF0045", //8
  "#FF002F", //9
  "#FF001B", //10
];
let colorIndex = 0;
let colorOrder = true;
let started = false

for (let i = 0; i < 40; i++) {
  const element = document.createElement("div");
  element.classList.add("element");
  element.style.width = "0.5rem";
  element.style.height = "4rem";
  element.style.backgroundColor = colors[colorIndex];
  element.style.boxShadow = `0px 0px 5px ${colors[colorIndex]}`
  container.appendChild(element);

  if (colorOrder) colorIndex++;
  else colorIndex--;

  if (colorIndex == colors.length - 1) colorOrder = false;
  if (colorIndex == 0) colorOrder = true;
}

btn.style.backgroundColor = colors[colorIndex];
btn.style.boxShadow = `0px 0px 5px ${colors[colorIndex]}`

btn.addEventListener("click", startInterval);

function startInterval() {
  if(!started){
    interval = setInterval(waving, 100);
    btn.innerText = 'Stop'
    started = true
  }else{
    clearInterval(interval)
    btn.innerText = 'Start'
    started = false
  }
  
}

function waving() {
  const elements = document.querySelectorAll(".element");
  elements.forEach((el) => {
    const random = Math.random()
    el.style.transform = `scaleY(${random})`
  });
}
