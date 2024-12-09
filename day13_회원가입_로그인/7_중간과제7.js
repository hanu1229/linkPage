/*
중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
[요구사항] 
1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
[제출]
강의 카카오톡방에 ip 링크 제출
*/

let idArray = [];
let pwArray = [];

function join() {
    let join_id = document.querySelector("#join_id");
    let join_pw = document.querySelector("#join_pw");
    if(join_id.value != "" && join_pw.value != "") {
        idArray.push(join_id.value);
        pwArray.push(join_pw.value);
        join_id.value = "";
        join_pw.value = "";
        console.log(idArray);
        console.log(pwArray);
    } else {
        alert("정확히 입력해주세요!!!");
    }
}

function login() {
    let content = document.querySelector("#content");
    let login_id = document.querySelector("#login_id");
    let login_pw = document.querySelector("#login_pw");
    if(login_id.value != "" && login_pw != "") {
        for(let i = 0; i < idArray.length; i++) {
            if(login_id.value == idArray[i]) {
                if(login_pw.value == pwArray[i]) {
                    content.innerHTML = `<h2>로그인 성공</h2>`;
                    login_id.value = "";
                    login_pw.value = "";
                    alert("로그인 성공!");
                    break;
                }
            }
            if(i == idArray.length-1) {
                content.innerHTML = `<h2>로그인 실패</h2>`;
                alert("로그인 실패!");
            }
        }
    }
}