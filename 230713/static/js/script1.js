

var redCup = 10;
var blueCup = 20;
var whiteCup = 0;

document.write("변경 전 빨강컵 : " + redCup + "파란컵 : " + blueCup + "<br>");

whiteCup = redCup;
redCup = blueCup;
blueCup = whiteCup;

document.write("변경 후 빨간컵 : " + redCup + "파란컵 : " + blueCup + "<br>");

var jin = 0;
var red = 1;
var blue = 2;
var yellow = 3; 
var green = 4;

jin = red;
document.write("변경 전 :" + jin + "<br>");
jin = green;
document.write("변경 후 :" + jin + "<br>");

// 제어문 - 조건문, 반복문
// 조건문 - if문, switch문
// 반복문 - for, while, do-while

// if문 - 조건식이 참이나 거짓이냐에 따라서 코드가 실행된다.
// 조건식 - 결과가 참과 거짓이 나오는 식
//          비교 - > , < , >= , <= , == , !=

var tall = 150;
if(tall >= 140) {
    document.write("바이킹 탑승" + "<br>");
}else{
    document.write("바이킹 탑승 불가" + "<br>");
}

// 점수가 60점 이상이라면 합격, 60점 미만 이라면 불합격
var score = 80;
if(score >= 60) {
    document.write("합격" + "<br>");
}else {
    document.write("불합격" + "<br>");
}

var fast = 40;
if(fast > 70) {
    document.write("과속입니다." + "<br><br>");
}else {
    document.write("과속이 아닙니다." + "<br><br>")
}

// var v = Number(prompt("자동차 속도"));
// if( v > 70) {
//     document.write("과속" + "<br>");
// }else{
//     document.write("정상속도입니다." + "<br>")
// }

// 내 점수의 등급을 출력하고 싶다.
// 90점 이상이면 A, 80점 이상이면 B, 70점 이상이면 C, 나머지는 F
// var score = Number(prompt("나의 점수"));

// if(score >= 90) {
//     document.write("A등급" + "<br>");
// }else if(score >= 80) {
//     document.write("B등급" + "<br>");
// }else if(score >= 70) {
//     document.write("C등급" + "<br>");
// }else {
//     document.write("F등급" + "<br>");
// }

// 음식을 배달 주문을 하였다.
// 음식점의 위치는 중구 대흥동이다.
// 같은 구에서 주문하면 배달료 0원, 서구에서 주문하면 배달료1000원
// 동구에서 주문하면 배달료 2000이라면
// 현재 나의 위치는 어디인지 입력하여 배달료 얼마인가 출력하시오
// (중구,서구,동구중 하나만 입력 합니다.)
// var space = prompt("장소");

// if(space == "중구") {
//     document.write("배달료 : 0원");
// }else if(space == "서구") {
//     document.write("배달료 : 1000원");
// }else if(space == "동구"){
//     document.write("배달료 : 2000원");
// }

// 다른 방법
// var place = prompt("나의 위치는");
// var tip = 0; //배달료 변수

// if(place == "서구") {
//     tip = 1000;
// }else if(place == "동구") {
//     tip = 2000;
// }
// document.write(place + "에서 주문 배달료는 :" + tip + "원 <br>");

// (Math.random()) : 난수를 발생함 0.00~ - 0.9999
// Math.floor : 정수
// 7 ~ 20나오게 하는 랜덤함수 
// Math.floor(Math.random() * 14(20 - 7 + 1)) + 7(최소숫자)
var num = Math.floor(Math.random() * 14) + 7;

document.write(num + "<br>");

// 동전 맞추기 , 1 - 앞면 , 2 - 뒷면
// var coin = Math.floor(Math.random() *2) + 1;
// var user = prompt("1.앞면 2.뒷면");

// // isNaN 함수는 숫자로 변환이 가능한 경우 거짓,
// // 숫자로 변환이 불가능한 경우 참
// if(isNaN(user)){
//     alert("숫자만 입력하세요");
//     user = prompt("1.앞면 2.뒷면");
// }
// user = Number(user); // 문자열을 숫자로 변환

// if(coin == user) {
//     document.write((user == 1 ? '앞면' : '뒷면') + "정답<br>");
// }else {
//     document.write("틀렸어..");
// }

// 주사위 게임
// 주사위는 던져졌다 주사위의 숫자 무엇인지 맞추시오.
// 내가 입력한 숫자가 주사위의 숫자와 같다면 정답, 같지 않다면 손목이라고 출력.

var dice = Math.floor(Math.random() * 6) + 1;
var user = prompt("1 ~ 6 입력해 주세요");
2
function inputNum(str) {
    var a= prompt(str);

    while (isNaN(a)){
        alert("숫자만 입력 가능합니다");
        a = prompt(ste);
    }
    a = Number(a);
    return a;
}
dice == user 
? document.write("정답입니다.")
: document.write("손목");