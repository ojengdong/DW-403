$("#send").click(function(){
    if($("#name").val() == ''){
        alert("작성자 입력하세요");
        $("name").focus();
    }else if($("#content").val() == ''){
        alert("내용을 작성하세요");
        $("#content").focus();
    }

    var sendData = JSON.stringify(
        {"writer" : $("#name").val(),"content" : $("#content").val()}
    );

    var result = ""; // 서버로부터 받은 값 저장 변수
    // JSON 서버에 보내기
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        result = this.responseText; // 서버로부터 받는 곳
        make_list(JSON.parse(result));
    }

    xmlhttp.open("POST", "http://krdrive.ipdisk.co.kr:8000/test/data.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x="+sendData);
});

function make_list(data) {
    var out = "";
    for(var i = 0; i < data.length; i++){
        out += "<li>"+ data[i].writer +" : "+data[i].date+"<p>"+ data[i].content + "</p></li>"
    }
    $("#chat_list").html(out);
    $("#content").val('');
    $("#content").focus('')
}