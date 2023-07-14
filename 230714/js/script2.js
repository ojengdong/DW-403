// 두번째 방법
// $(function () { // 페이지가 모두 로드(화면에 표시할꺼) 되면 실행
//     $(".prev").on("click", function(){
//         $(".nav-menu").css("transform", "translate(0px,0px)");
//     });
//     $(".next").click(function(){
//         $(".nav-menu").css("transform", "translate(-360px,0px)");
//     });
// });

// 첫번째 방법
let slide_left = 0;
$(function () { // 페이지가 모두 로드(화면에 표시할꺼) 되면 실행
    $(".prev").on("click", function(){
        // 첫번째 li가 화면에 표시된 경우
        if( 0 == slide_left)
            return;
        
            slide_left += 180; // slide_left = slide_left + 180
        $(".nav-menu").css("left", slide_left + "px");
    });
    $(".next").click(function(){
        var li = $(".nav-menu>li");
        var len = li.length;

        // 마지막 li가 화면에 표시된 경우
        if( ((len - 1) * -180) == slide_left)
            return;
        
        slide_left -= 180;
        
        $(".nav-menu").css("left", slide_left + "px");
    });

        make(); // make함수 호출
});
function make(){
    // 반복문을 이용해서 table 태그를 만들고
    // 테이블 안에 내용을 출력한다.

    const list = ["이순신","김유신","장보고","강해민","강미정","김선경",
        "김재호","이채영","이재원","여상현","이예진"];
    

    const addr = ["대흥동","선화동","은행동","중리동","둔산1동","오정동",
            "탄방동","태평동","문화동","갈마동","소재동","삼성동"];

    var out = "<h3>투게더 명단 ("+list.length+")명</h3>";

    out += "<table class='list_box'>"
    for(var i = 0;  i < list.length; i++) { //list 배열의 이름 만큼 반복
        out += "<tr>"

            out += "<td class='name'> <span>" +list[i]+ "</span> </td>";
            out += "<td class='age'>" + (Math.floor(Math.random() * 16) + 20) +"</td>"
            var n = Math.floor(Math.random() * addr.length);
            out +=  "<td class='addr'>" + addr[n] + "</td>"

        out += "</tr>"
    }
    out += "<table class='list_box'>"

    $("#section").html(out);
}
// 기본 슬라이드 구현
// 1.하나씩 나타내기
// - 장면 하나의 크기만큼 옆으로 이동시킨다.

// 2.여러개의 내용이 화면에 나오는 경우 한번에 다음 내용들을
//   나타낸다.
//  - 여러 장면의 전체 크기만큼 이동시킨다.