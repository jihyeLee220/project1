let changeBtn = document.querySelector("#change");
console.log(changeBtn);
changeBtn.onclick = changeColor;

function changeColor() {
  document.querySelector("p").style.color = "red";
}

changeBtn.ondblclick = changeColor_2;

function changeColor_2() {
  document.querySelector("p").style.color = "#000";
}

let now = new Date();
let nowYear = now.getFullYear;
let nowmonth = now.getMonth;
document.write(now.toLocaleString);
