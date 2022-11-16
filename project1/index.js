window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
});

window.onscroll = function () {
  var mainTwo = document.querySelector(".main2");
  var navigate = document.querySelector(".navigate");
  var headerBack = document.querySelector("header");
  var main3 = document.querySelector(".main3").offsetTop;

  if (scrollY >= 850) {
    mainTwo.style.opacity = "1";
    mainTwo.style.backgroundColor = "#000";
    mainTwo.style.transition = "1s";
    navigate.style.border = "1px solid purple";
    navigate.style.transition = "0.4s";
    headerBack.style.backgroundColor = "#fff";
  } else if (scrollY <= 750) {
    mainTwo.style.opacity = "0.1";
    mainTwo.style.transition = "1s";
    mainTwo.style.backgroundColor = "#fff";
    navigate.style.border = "1px solid #000";
    navigate.style.transition = "0.4s";
    headerBack.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }

  if (scrollY > document.querySelector(".main3").offsetTop - 50) {
    headerBack.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    headerBack.style.transition = "0.5s";
  }
};

function portfolio() {
  var location = document.querySelector(".main2").offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
}
function about_me() {
  var location2 = document.querySelector(".main3").offsetTop;
  window.scrollTo({ top: location2, behavior: "smooth" });
}
