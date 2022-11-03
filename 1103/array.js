// concat (배열 합치기)
let a = ["a", "b"];
let b = ["a", "b", "c"];

a.concat(b);

// true 인지 false인지 확인
const nunderNumber = (number) => number < 40;
const arr1 = [1, 2, 3, 4];
arr1.every(nunderNumber);
//길이 확인 length filter 는 걸러주기
const word = ["a", "ab", "abc", "abcd"];
word.filter((alpa) => {
  return alpa.length < 3;
});
//배열의 속성과 순번을 알려주는
let client = ["김", "이", "최", "박"];

client.forEach((name, index) => {
  console.log(name);
  console.log(index);
});
//찾는 요소의 순번를 알려줍니다.
let client3 = ["사과", "바나나", "메론", "딸기"];
client3.indexOf("바나나");
// 문자열로 표현
let client4 = ["사과", "바나나", "메론", "딸기"];
client4.join(","); // , 넣어서 합치기
client4.join(""); //공백없이
//마지막에 넣습니다.
let client5 = ["사과", "바나나", "메론", "딸기"];
client5.push("망고");
//시작부분에 새로 넣습니다.
client5.unshift("수박");
//마지막 요소를 꺼냅니다.
let client6 = ["사과", "바나나", "메론", "딸기"];
client6.pop();
//첫번째 요소를 꺼내줍니다.
client5.shift("수박");
//
// splice (언제부터 어디까지 추가할것)
//배열에 내가 원하는 시작 지점부터 삭제 또는 추가가 가능
client6.splice(1, 0, "감");
client6.splice(3, 0, "포도", "오렌지");
client6.splice(3, 2); //3뒤부터 배열 요소 2개삭제
//
// arr.slice(start,end)
// 슬라이스는 삭제 되지않음 뽑아오기만함
client6.slice(3);
//
client6.reverse();
// 내가 원하는 방식대로 정렬하고싶을때
let client7 = ["a", "b", "c", "g", "z", "h"];
client7.sort();
// 리버스로 정렬
client7.sort((a, b) => {
  if (a > b) {
    return -1;
  }
});

//
client7[0].toString();
