// ~하는 동안은 계속 반복한다.
// for(시작값; 조건식; 증감식){
    // 반복할 내용
// }

// i 는 반복한 횟수를 의미
// for(i = 0; i < 5; i++){
//     document.getElementById("para1").innerHTML 
//     = document.getElementById("para1").innerHTML + i;
// }

// 0부터 100까지의 정수를 더하는 코드를 작성하시오.
// var total = 0;
// for(i = 0; i <= 100; i++){
//     total = total + i;
    
// }

// document.getElementById("para1").innerHTML = total;

// 100 부터 0까지의 정수를 더하는 코드를 작성하시오.
// var total = 0;
// for(i = 0; i <= 100; i++){
//     total = total + (100 - i);
// }
// 다른방법
// for(i = 100; i >= 0; i--) {
//     total = total + i;
// }

// document.getElementById("para1").innerHTML = total;

// 0+2+4+6+8+10+...+96+98+100
// total = 0;
// for(i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         total = total + i;
//     }
// }

// document.getElementById("para1").innerHTML = total;

// 1+3+5+7+9+...+97+99
var total = 0;
for(i = 0; i <= 100; i++){
    if(i % 2 === 1){
        total = total + i;
    }
}

document.getElementById("para1").innerHTML = total;

// 아이디가 para1인 태그 내부에 100개의 *을 기입하는 코드를 작성하시오.
var star = "";
for( i = 0; i < 10; i++){
    star = star + "*";
}

document.getElementById("para1").innerHTML = star;

// 아이디가 date인 태그의 내부에 <option></option>를 기입하는 행위를
// 31번을 반복하되 옵션태그 내에는 1부터 31까지의 숫자가 들어가야한다.
// var tag = "";
// for(i = 0; i < 31; i ++) {
//     tag = tag + "<option>"+ (i + 1) +"</option>";
// }

// document.getElementById("date").innerHTML = tag;

// 오감도 - 이상
var fiveSense = "";
var chinese = ["一",
"二",
"三",
"四",
"五",
"六",
"柒",
"八",
"九",
"十",
"十一",
"十二",
"十三"];
for(i = 0; i < 13; i++) {
    if(i == 0 || i == 10){
        fiveSense = fiveSense + "제 " + chinese[i] + "의 아해가 무섭다고 그리오<br>";   
    }else{
        fiveSense = fiveSense + "제 " + chinese[i] + "의 아해가 무섭다고 그리오<br>";
    }
    
}
document.getElementById("para1").innerHTML = fiveSense;