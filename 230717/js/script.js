// 페이지를 연 후 3초가 지났을 때 이런일을 할 것이다.
// 아이디가 box1인 녀석 안에 "hello"라는 문자열을 추가 하겠다.


// setTimeout( function() {
//     document.getElementById("box1").innerHTML
//     = document.getElementById("box1").innerHTML + "hello";
// },3000);

// 페이지를 연 후 3초 마다 이런일을 할것이다.
// 아이디가 box1인 녀석안에 "hello" 라는 문자열을 추가하겠다.
// setInterval(function() {
//     document.getElementById("box1").innerHTML 
//     = document.getElementById("box1").innerHTML + "hello";
// }, 5000)

// 한자리 숫자인 경우 앞에 "0"을 추가해주는 함수

function addZero(num) {
    // 재료로 들어온 숫자(num)가 만약 10보다 작다면?(한자리숫자라면)
    // 그 숫자 왼쪽에 "0"을 더해주고 가공된 숫자라고 하자.
    // 그렇지 않다면
    // 그냥 재료로 들어온 숫자를 가공된 숫자라고 하자.
    // 그렇게 가공된 숫자를 원청자에게 납품한다.
    var result;
    if(num < 10) {
        result = "0" + num;
    }else {
        result = num;
    }
    return result;
}

function add2Zero(num) {
    var result;
    if(num < 10){
        result = "00" + num;
    }else if (num < 100) {
        result = "0" + num;
    }else{
        result = num;
    }
    return result;
}


var clock = setInterval(function(){
    // 현재 시간을 캡쳐한다.
    // 당시의 시, 분, 초를 알아낸다
    // 각각 시, 분, 초가 한자리 숫자인 경우 addZero함수를 이용해 0을 붙인다.
    // 이렇게 만들어진 시, 분, 초를 시:분:초의 형태로 만들어서
    // 아이디가 box1이라는 녀석에 내용으로 써준다.
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var msec = now.getMilliseconds();
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    msec = add2Zero(msec)
    var time = hour + ":" + min + ":" + sec + ":" + msec;
    document.getElementById("box1").innerHTML = time;
},20);

// 문서에서 아이디가 "clockStopBtn"이라는 녀석이 눌리면 이런일을 할 것이다.
// clock이라는 interval 멈추자
document.getElementById("clockStopBtn").onclick = function(){
    clearInterval(clock);
};

var arr = ["김태희","정지훈","홍길동","임꺽정","일지매"];
document.getElementById("addName").onclick = function() {
    var name = document.getElementById("userName").value;
    arr.push(name);
    alert(arr);
}

document.getElementById("delName").onclick = function() {
    arr.pop();
    alert(arr);
}

// 최소값, 최대값을 지정하고 그 사이에서 랜덤한 정수를 만드는 함수
// Math.random() => 0 ~ 1
// Math.random() * 5 => 0 ~ 5
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// var count = [0,0,0,0,0,0];
// for(i = 0; i < 1000; i++){
//     var num = rand(1,6);
//     count[num - 1]++;
// }
// alert(count)

// setInterval(function() {
//     var r = rand(0,255);
//     var g = rand(0,255);
//     var b = rand(0,255);
//     document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+r+","+g+"," +b+")";
// }, 1000)

var text = "안녕하세요."

// path에서 확장자 추출하기
// var path = "abc/fff/eee.jpg"
var path = location.href;
path = path.split("/");
var ext = path[path.length - 1].split("."); // 파일명
ext = ext[ext.length - 1]; // 확장자

console.log(ext);