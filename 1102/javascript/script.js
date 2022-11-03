// var i = 1;
// var j = 1;
// for (i = 1; i < 10; i++) {
// i의 초기값은 1 i가 10보다 작을때 아래 실행하고나서 i에 1을 더함
//   document.write(`<div>`);
//   document.write(`<h3> ${i}단 </h3>`);
//   for (j = 1; j < 10; j++) {
// j의 초기값은 1 j가 10보다 작을때 아래를 실행하고 j에 1을 더함
//     document.write(`${i} x ${j} = ${i * j} <br>`);
//     1부터 9까지의 곱하기가 돌아감~~
//   }
//   document.write(`</div>`);
// }

// var n = prompt("숫자를 입력하세요.");
// var msg = "";

// if (n !== "") {
//   var nFact = 1;
//   var i = 1;

//   while (i <= n) {
//     document.write("몇번");
//     nFact *= i;
//     i++;
//   }
//   msg = `${n}!= ${nFact}`;
// } else {
//   msg = "값을 입력하지 않았습니다.";
// }
// document.write(msg);

// var session = prompt("관심 세션 1-마케팅,2-개발,3-디자인");

// switch (session) {
//   case "1":
//     document.write(`<p>마케팅 세션은 201호에서</p>`);
//     break;
//   case "2":
//     document.write(`<p>개발세션은 202호에서</p>`);
//     break;
//   case "3":
//     document.write(`<p>디자인 세션은 203호에서</p>`);
//     break;
//   default:
//     alert("잘못입력하셨습니다.");
// }

// var i, j;

// for (i = 1; i < 10; i++) {
//   document.write(`<div>`);
//   document.write(`<h3> ${i}단 </h3>`);
//   for (j = 1; j < 10; j++) {
//     document.write(`${i} x ${j} = ${i * j} <br>`);
//   }
//   document.write(`</div>`);

//   if (i === 3) break;
// }

// var i, j;
// var sum = 0;

// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 1) continue;

//   sum += i;

//   document.write(`<p> ${i} -------- ${sum} </p>`);
// }

// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth();
// let day = today.getDay();

// document.write(year, month, day);

// var i, j;
// var total = prompt("총 몇명이서 앉나요?");
// var width = prompt("한줄에 몇명씩 앉나요?");
// var row;

// if (total % width === 0) {
//   row = parseInt(total / width);
// } else {
//   row = parseInt(total / width + 1);
// }
// console.log(row);

// document.write(`<table>`);
// for (i = 0; i < row; i++) {
//   document.write(`<tr>`);
//   for (j = 1; j <= width; j++) {
//     seat = i * width + j;
//     if (seat > total) break;
//     document.write(`<td>${seat} 좌석 </td>`);
//   }
//   document.write(`</tr>`);
// }
// document.write(`</table>`);
// var i, j;

// var i = 1;
// var j = 1;
// for (i = 1; i < 10; i++) {
// i의 초기값은 1 i가 10보다 작을때 아래 실행하고나서 i에 1을 더함
//   document.write(`<div>`);
//   document.write(`<h3> ${i}단 </h3>`);
//   for (j = 1; j < 10; j++) {
// j의 초기값은 1 j가 10보다 작을때 아래를 실행하고 j에 1을 더함
//     document.write(`${i} x ${j} = ${i * j} <br>`);
//     1부터 9까지의 곱하기가 돌아감~~
//   }
//   document.write(`</div>`);
// }

var i, j;

for (i = 0; i <= 5; i++) {
  for (j = 0; j < i; j++) {
    document.write(`*`);
  }
  document.write("<br>");
}

var a, b;

for (var a = 0; a < 5; a++) {
  for (var b = 4; b > a; b--) {
    document.write(`&nbsp`);
  }
  for (var b = 0; b <= a; b++) {
    document.write(`*`);
  }
  document.write("<br>");
}

for (i = 0; i <= 5; i++) {
  for (j = 5; j > i; j--) {
    document.write(`*`);
  }
  document.write("<br>");
}

for (i = 0; i < 5; i++) {
  for (j = 4; j > i; j--) {
    document.write(`&nbsp`);
  }
  for (j = 0; j <= i; j++) {
    document.write(`*`);
  }
  for (j = 1; j <= i; j++) {
    document.write(`*`);
  }
  document.write("<br>");
}
for (let i = 0; i < 5; i++) {
  /* 다섯줄을 반복*/
  for (let j = 4; j > i; j--) {
    /* 공백 표시하는 script*/
    document.write(`&nbsp`);
  }
  for (let j = 0; j <= i; j++) {
    document.write("*");
  }
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (i = 0; i < 5; i++) {
  for (j = 0; j <= i; j++) {
    document.write("#");
  }
  document.write(`<br>`);
}
