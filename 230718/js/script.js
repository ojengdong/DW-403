var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();

// var wol = ["Jan","Fad","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// alert(wol[month])
// alert(month + 1)

var date = now.getDate();
// 한자리 숫자일 때 좌측에 0을 추가해주는 함수
function addZero(num) {
  var result = "";
  if (num < 10) {
    result = "0" + num;
  } else {
    result = num;
  }
  return result;
}

var day = now.getDay();
var yoli = ["일", "월", "화", "수", "목", "금", "토"];

// 2023 - 07 - 18
month = addZero(month + 1);
date = addZero(date);

// 2023 - 07 - 18 AM 10 : 03
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
var ampm = "";
if (hour >= 12) {
  ampm = "PM";
  hour = hour - 12;
} else {
  ampm = "AM";
}

if (hour == 0) {
  hour = 12;
}

hour = addZero(hour);
min = addZero(min);
sec = addZero(sec);

var narjja = year + "-" + month + "-" + date + " " + yoli[day];
narjja += " ";
narjja += ampm;
narjja += " ";
narjja += hour;
narjja += ":";
narjja += min;
narjja += ":";
narjja += sec;

// alert(narjja);

// timestamp 이용한 날짜 계산
// 2022 - 02 - 03 이 날로 부터 며칠 지났는지?
// now 에서 2022 - 02 - 03이라는 이 시간을 빼면 => 지나온 세월
// now의 timestamp에서 2022 - 02 - 03의 timestamp를 빼면
// => 지나온 세월(timestamp) =>
document.getElementById("dateBtn").onclick = function () {
  var date = document.getElementById("date").value;
  var anni = new Date("2023-07-15");
  var anniTimestamp = anni.getTime();
  var nowTimestamp = now.getTime();
  var duration = nowTimestamp - anniTimestamp;
  duration = duration / 1000;
  duration = parseInt(duration); // integer(정수) 초

  // 하루 = 24시간 = 1440분 = 86400초
  duration = duration / 86400;
  duration = Math.floor(duration);
  document.getElementById("result").value = duration + "일 째 입니다.";
};

// 왜 이름이 jQuery인가?
//      javascript query(질의) => 뭔가를 부른다!

// for(i = 1; i <= 100; i++){
//     $("#box" + i);
// }

// 상현아 걸어가라.
// $("상현").walk();

// // 상현아 날씨가 비올 때 뛰어가라.
// $("상현").비올때(function(){
//     $("상현").뛰어가라();
// })

// 까마귀 날자 배 떨어진다.
// $("까마귀").날때(function(){
//     $("배").떨어진다();
// })

// $("#list1>li").mouseover(function(){
//     $("#list1>li").css("color","red");
// });

// $("#list1>li").mouseout(function(){
//     $(this).css("color","black");
// })

$(document).ready(function(){
    $("#list1>li").click(function(){
        $(this).hide();
    });

    // #nation인 녀석의 값이 변했을 때 
    // alert으로 그녀석의 값을 표시하자
    $("#nation").change(function(){
        alert( $(this).val() );
    });

    $("input").focus(function(){
        $(this).css("outline","2px solid red");
    });

    // #input1에서 키가 눌릴 때
    // 그 내용을 #final에 적겠다
    $("#input1").keyup(function(){
        var t = $(this).val();
        $("#final").text(t);
    });

    $("#submitBtn").click(function(){
        alert();
    });

    // #input2에서 키가 눌렀을 때 
    // 방금 눌린키가 엔터키라면
    // #submitBtn을 누른셈이나 다름없게 하겠다.
    $("#input2").keyup(function(event){
        if(event.keyCode == 13) {
            $("#submitBtn").trigger("click");
        }
    });

    // 마우스가 움직일때마다 이런일들을 하겠다.
    // 방금 움지긴 그 마우스의 x,y좌표를 찾아라.
    // #fly인 녀석에게 x,y조표를 통해 위치를 지정해준다
    // $(document).mousemove(function(e){
    //     var x = e.clientX;
    //     var y = e.clientY;
    //     $("#fly").css("left", x + "px");
    //     $("#fly").css("top", y + "px");
    // })

    // 1 .main에 마우스에 올렸을때 이런일이 벌어질 것이다.
    // 방금 그것의 자식중 .sub라고 하는 녀석을 보여주자.
    // .main에서 마우스 치웠을 때 이런일이 벌어질 것이다.
    // 방금 그것의 자식중 .sub라고 하는 녀석을 숨겨주자.
    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    })

    // 2 .main>a에 마우스 올렸을때
});