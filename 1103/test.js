// var people = prompt("방명록을");

// var never = /^[a-z]$/;

// if (!!people && never.test(people)) {
//   alert("어서오세요");
// } else {
//   alert("입장불가");
// }

const name = prompt("출입자 명단은?");
// 1번 풀이
// 배열과 indexOf
const alpa = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "s",
  "y",
  "x",
  "z",
];
if (alpa.indexOf(name) < 0) {
  alert("입장불가능입니다.");
} else {
  alert("어서오세요!");
}

// if (name >= "a" && name <= "z") {
//   alert("어서오세요");
// } else {
//   alert("입장불가능입니다.");
// }
