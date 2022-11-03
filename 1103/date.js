const now = new Date();

now.getFullYear();
let month = now.getMonth();
now.getDay(); //0이 일요일~
now.getDate(); //일
now.getMinutes();
now.getHours();

const temp = new date("2022-01-01");
temp.getMonth() + 1;

now.getTime();
//쿠폰 발행일이 11월 4일
//현재 날짜는 11월 3일
// getTime을 이용해서
const coupon = new Date("2022-11-05T00:00:00");
const limit = coupon.getTime();

const now1 = new Date();
const now2 = now1.getTime();

if (limit - now2 > 0) {
  alert("쿠폰사용가능합니다.");
} else {
  alert("쿠폰 사용 불가능합니다.");
}

const now3 = new Date();
now3.getHours();
now3.getMinutes();
now.getSeconds();
//-------------------시간정보를 가져오는-------------------//
//-------------------시간정보를 설정하는------------------//
const now4 = new Date();

// 오늘로부터 입력받은 몇일이 지난 날의 날짜를 계산해주세요.

const date1 = new Date();
const value = prompt("일을입력해주세요.");

date1.setDate(value);
alert(date1.toLocaleString);

for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 3 + 1));
}
