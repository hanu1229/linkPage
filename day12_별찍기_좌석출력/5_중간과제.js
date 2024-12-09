/*
    [문제 1] 아래 배열을 이용한 아래 출력형식으로 구현하기
        1. 영화 이름 목록 : movieNames = ["히든페이스", "위키드", "글래디에이터2", "청설"];
        2. 영화 평점 목록 : movieRating = [8, 4, 7, 6]
        3. HTML 예시 ☆★
            히든페이스      ★★★★★★★★☆☆
            위키드          ★★★★☆☆☆☆☆☆
            글래디에이터2   ★★★★★★★☆☆☆
            청설            ★★★★★★☆☆☆☆
    
    [문제 2] 6개의 시트(좌석)이 존재하는 좌석 상태 출력하시오.
        1. 좌석은 총 6개, 빈좌석인지 예약석인지는 임의로 구성
        2. 아래와 같이 좌석을 2칸씩 3줄을 출력한다.
        3. HTML 예시
            빈좌석  예약석
            예약석  빈좌석
            예약석  빈좌석
        4. 빈좌석이면 blue색상 표기, 예약석이면 red색상으로 표기하시오.

*/

// [문제 1]

let movieNames = ["히든페이스", "위키드", "글래디에이터2", "청설"];
let movieRating = [8, 4, 7, 6];
let innerHTML1 = `<h1>[문제 1]</h1><table>`;

for (let i = 0; i < movieNames.length; i++) {
    let count = 0;
    let temp = "";
    for (let j = 0; j < 10; j++) {
        if (count < movieRating[i]) {
            count++;
            temp = temp + "★";
        } else {
            temp = temp + "☆";
        }
    }
    innerHTML1 = innerHTML1 + `<tr><td>${movieNames[i]}</td><td>${temp}</td></tr>`
}
innerHTML1 = innerHTML1 + "</table>";
document.write(innerHTML1);


// [문제 2]
let sheetArray = ["빈좌석", "예약석", "예약석", "빈좌석", "예약석", "빈좌석"];
let innerHTML2 = "<h1>[문제 2]</h1><table>";
for (let i = 0; i < sheetArray.length; i++) {
    let color = "";
    color = sheetArray[i] == "빈좌석" ? "blue" : "red";
    innerHTML2 = innerHTML2 + `<tr><td style = "color : ${color};">${sheetArray[i]}</td>`;
    i++;
    color = sheetArray[i] == "빈좌석" ? "blue" : "red";
    innerHTML2 = innerHTML2 + `<td style = "color : ${color};">${sheetArray[i]}</td></tr>`;
}
innerHTML2 = innerHTML2 + "</table>"
document.write(innerHTML2);
