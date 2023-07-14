// 주차장 요금 계산
// 주차장 기본요금 1000원 (30분)
// 10분 초과시 100원 추가
// 2시간 이상 주차시 기본요금 1500원
// 4시간 이상 주차시 기본요금 2500원
// 8시간 이상 주차시 무조건 5000원
// 주차한 시간이 총 몇분인가 입력하여 요금 출력하기
var time = Number(prompt("주차시간"));
var cost = 1000;

if(time >= "480"){
    cost = 5000;
    time = 0;
}else if(time >= "240") {
    cost = 2500;
    time = time - 240;
}else if(time >= "120"){
    cost = 1500;
    time = time - 120
}else {
    time = time < 40 ? 0 : time - 30; 
}


var price = cost + ( parseInt(time / 10) * 100);
document.write("주차요금 : " + price);