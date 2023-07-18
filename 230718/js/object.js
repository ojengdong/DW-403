let info = new Array();
info[0] = {"name" : "강해민", "age" : 27, "tel" : "01064280786"};
// '{"info1" : {"name" : "강해민", "age" : 27, "tel" : "01064280786"}}'
// {
//     "info" : [
//         {"name" : "이순신", "age": 23},
//         {"name" : "여상현", "age" : 25}
//     ]
// }

// let jsoninfo = JSON.stringify(info); // 자바스크립트 객체를 JSON으로 변환

// // JSON -> 자바스크립트 : JSON.parse();
// // 서버에 보낼때는 JSON으로 변환하고 서버로 부터 받을 때는 자바스크립트로 변환한다.
// // 

// console.log(JSON.parse(jsoninfo));
// console.log(jsoninfo);

$("#save_bt").click(save_info);

let cnt = 0; // 전역변수
function save_info(){
    var name = $("#name").val();
    var age = $("#age").val();
    var tel = $("#tel").val();
    info[++cnt] = {"name" : name,"age" : age, "tel":tel};

    console.log(JSON.stringify({ "info" : info }))

    for(var i = 0; i<info.length; i++){
        $("#output_box").append("<br>이름 :" + info[i].name + "<br> 나이 :" 
        + info[i].age + "<br>연락처 :" + info[i].tel);
    }

    // $("#output_box").html("이름 : " + info.name + "<br> 나이 : " + info.age +
    // "<br> 연락처 :" + info.tel);
}