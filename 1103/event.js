// function ale() {
//   alert("버튼누름22");
// }
// window.addEventListener("load", function () {
//   this.alert("메롱");
// });
// window.addEventListener("resize", function () {
//   this.alert("사이즈줄임?");
// });
// window.addEventListener("scroll", function () {
//   this.alert("스크롤했음?");
// });
function changeBg(color) {
  let result = document.querySelector("#result");
  console.log(color);
  //   result.style.backgroundColor = color;
  let liBg = document.querySelector("ul li");
  liBg.style.backgroundColor = color;
}
