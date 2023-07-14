var ganji = ["신","유","술","해","자","축","인","묘","진","사","오","미"]
function zodiac(year) {
   return ganji[year % 12];
}
document.getElementById("btn").onclick = function(){
    var birth = document.getElementById("birth").value;
    var target = document.getElementById("target").value;
    if(birth.length * target.length == 0){
        alert("생년과 대상연도를 입력해주세요.");
    }else {
        var birthDdi = zodiac(birth);
        var targetDdi = zodiac(target);
        if(birthDdi == "신" || birthDdi == "자" || birthDdi == "진"){
            if(birthDdi == "인" || birthDdi == "묘" || birthDdi == "진"){
                samjae(true);
            }else {
                samjae(false);
            }
        }
    }
};
