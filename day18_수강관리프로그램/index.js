let 클래스목록 = [
    { 강의코드: 1, 강의명: "HTML", 호실: "101호", 강사: "김철수" },
    { 강의코드: 2, 강의명: "CSS", 호실: "102호", 강사: "이영희" },
    { 강의코드: 3, 강의명: "JS", 호실: "103호", 강사: "홍길동" },
];

let 수강생목록 = [
    { 학생코드: 1, 학생이름: "유재석", 성별: "남", 전화번호: "010-1111-1111" },
    { 학생코드: 2, 학생이름: "이영애", 성별: "여", 전화번호: "010-2222-2222" },
    { 학생코드: 3, 학생이름: "강호동", 성별: "남", 전화번호: "010-3333-3333" },
];

let 수강목록 = [
    { 수강로그코드: 1, 학생코드: 1, 강의코드: 1 },
    { 수강로그코드: 2, 학생코드: 1, 강의코드: 3 },
];

let 강의코드 = 4;
let 학생코드 = 4;
let 수강로그코드 = 3;
클래스출력함수();

// #region 클래스관련 함수
function 클래스등록함수() {
    let 클래스명 = document.querySelector('#클래스명').value;
    let 호실명 = document.querySelector('#호실명').value;
    let 강사명 = document.querySelector('#강사명').value;
    let 객체 = { 강의코드: 강의코드, 강의명: 클래스명, 호실: 호실명, 강사: 강사명 };
    클래스목록.push(객체);
    클래스출력함수();
    클래스선택출력함수();
}//f end																								

function 클래스출력함수() {
    let 클래스출력함수2 = document.querySelector('#클래스테이블');
    let innerHTML = '';
    for (let index = 0; index < 클래스목록.length; index++) {
        innerHTML += '<tr>'
        let 클래스 = 클래스목록[index]
        //console.log(인사정보)																								
        innerHTML += `
            <td>${클래스.강의명}</td>
            <td>${클래스.호실}</td>
            <td>${클래스.강사}</td>
            <td class = "otherBtn">
            <button class = "tableBtn" onclick = "클래스수정함수(${클래스.강의코드})">수정</button>
            <button class = "tableBtn" onclick = "클래스삭제함수(${클래스.강의코드})">삭제</button>
            </td>
        </tr>`;
        // innerHTML += '</tr>'
    }
    클래스출력함수2.innerHTML = innerHTML;
    클래스선택출력함수();
}//f end																								

function 클래스삭제함수(강의코드) {
    // 1. 배열내 삭제할 요소(객체)를 찾기/조회/검색 등등																								
    for (let index = 0; index <= 클래스목록.length - 1; index++) {
        if (클래스목록[index].강의코드 == 강의코드) {
            // 만약에 index번째의 할일객체내 할일코드와 삭제할할일코드와 같으면																								
            // 2. 배열내 요소(객체) 삭제, .splice( 삭제할인덱스 , 개수 ) , 인덱스 필요.																								
            클래스목록.splice(index, 1); //현재 찾은 index 요소를 삭제한다.
            // 추가
            alert("삭제되었습니다.");																								
            break; // 삭제 성공했을때 [다른 객체를 조회할 필요없이] 가장 가까운 반복문 종료.																								
        } // if end																								
    } // for end																								
    클래스출력함수();
    클래스선택출력함수();
    return;

}//f end																								


function 클래스수정함수(강의코드) {
    // 1. 배열내 수정할 객체/요소 를 찾는다.																								
    for (let index = 0; index <= 클래스목록.length - 1; index++) {
        if (클래스목록[index].강의코드 == 강의코드) {
            let 임시 = prompt("강의명 / 호실 / 강사 를 입력해주세요").split("/");
            클래스목록[index].강의명 = 임시[0];
            클래스목록[index].호실 = 임시[1];
            클래스목록[index].강사 = 임시[2];
            break;
        }
    }
    클래스출력함수();
    클래스선택출력함수();
    return;
}//f end																								
// #endregion 클래스관련함수

// #region 수강생관련함수
// 추가
클래스선택출력함수();
function 클래스선택출력함수() {
    let choice = document.querySelector('#choiceClass');
    let html = `<option value = "없음">없음</option>`;
    for(let index = 0; index < 클래스목록.length; index++) {
        let temp = 클래스목록[index];
        html += `<option value = ${temp.강의코드}>${temp.강의명}</option>`;
        // console.log("실행" + index);
    }
    choice.innerHTML = html;
}
function 수강등록함수(클래스코드, 수강생코드) {
  if(클래스코드 != "없음") {
    클래스코드 = Number(클래스코드);
    console.log("클래스코드 : " + 클래스코드 + " 학생코드 : " + 수강생코드);
    let 새로운수강 = {수강로그코드 : 수강로그코드, 학생코드 : 수강생코드, 강의코드 : 클래스코드};
    // 수강로그코드++;
    수강목록.push(새로운수강);
    console.log("새로운 수강");
    console.log(새로운수강);
    console.log(수강목록);
    return 수강로그코드++;
  }
}
function 수강추가함수(변경할내용) {
  let temp = prompt("추가하고 싶은 강의코드를 입력하세요( ,로 구분 )");
  temp = temp.split(",");
  console.log(temp);
  for(let i = 0; i < temp.length; i++) {
    let 새로운수강 = {수강로그코드 : 수강로그코드, 학생코드 : 변경할내용, 강의코드 : Number(temp[i])};
    수강로그코드++;
    수강목록.push(새로운수강);
  }
  console.log(수강목록);
  수강생출력함수();
}
function 수강삭제함수(변경할내용) {
  let temp = prompt("삭제하고 싶은 강의코드를 입력하세요( ,로 구분)");
  temp = temp.split(",");
  console.log(temp);
  for(let i = 0; i < 수강목록.length; i++) {
    let 수강 = 수강목록[i];
    for(let j = 0; j < temp.length; j++) {
      if(수강.학생코드 == 변경할내용 && 수강.강의코드 == temp[j]) {
        수강목록.splice(i, 1);
      }
    }
  }
  수강생출력함수();
}

// [1] 등록함수
function 등록함수() {
    // 1. [입력] html 수강생(input)으로 부터 입력받은 값(value)을 JS 로 가져온다.
    let 수강생명 = document.querySelector('#inputName').value;
    let 수강생성별 = document.querySelector('#gender').value;
    let 폰번호 = document.querySelector('#phoneNumber').value;
    let 클래스코드 = document.querySelector('#choiceClass').value;
    let 수강코드 = 수강등록함수(클래스코드, 학생코드);
  
    // 2. [처리] 객체 생성 --> 배열에 저장(push)
    let 학생목록 = {
      학생코드: 학생코드,
      학생이름: 수강생명,
      성별: 수강생성별,
      전화번호: 폰번호,
    };
    수강생목록.push(학생목록); // 생성한 객체를 배열에 저장/대입
    학생코드++; // 다음 학생코드 등록할때 학생코드가 1씩 증가 하기 위해서
    수강로그코드++;
    // 3. [출력]
    console.log(수강생목록); // 테스트/확인
    수강생출력함수();
  
    // + 부가 코드
    alert(`${수강생명} 님 등록 되었습니다.`);
    document.querySelector('#inputName').value = ''; // [value 값 공백으로 수정]
    document.querySelector('#gender').value = ''; // [value 값 공백으로 수정]
    document.querySelector('#phoneNumber').value = ''; // [value 값 공백으로 수정]
    return; // 함수종료, 리턴 값이 없는 생략 가능
  }
  
  // [2] 수강생출력함수
  수강생출력함수();
  function 수강생출력함수() {
    // 1. 어디에, #totalOutput
    let 전체출력 = document.querySelector('#totalOutput');
    // 2. 무엇을
    let html = ``;
    let 강의리스트 = [];
    for(let index = 0; index < 클래스목록.length; index++) {
      let temp = 클래스목록[index];
      let temp2 = {클래스코드 : temp.강의코드, 클래스명 : temp.강의명};
      강의리스트.push(temp2);
    }
    for (let index = 0; index <= 수강생목록.length - 1; index++) {
      // index 는 0부터 수강생목록내 마지막까지 1씩 증가 반복
      let 수강생 = 수강생목록[index]; // index 번째의 객체(수강생)꺼내기
      let 목록 = [];
      for(let j = 0; j <수강목록.length; j++) {
        if(수강생.학생코드 == 수강목록[j].학생코드) {
          console.log(수강목록[j]);
          // if(수강목록[j].강의코드 == 1) {

          // }
          목록.push(수강목록[j].강의코드);
        }
      }
      html += `<tr>
                <td>${수강생.학생이름}</td>
                <td>${수강생.성별}</td>
                <td>${수강생.전화번호}</td>
                <td>${목록}</td>
                <td>
                  <div class = "otherBtn">
                    <button class = "tableBtn" onclick="수강추가함수(${수강생.학생코드})">추가</button>
                    <button class = "tableBtn" onclick="수강삭제함수(${수강생.학생코드})">삭제</button>
                  </div>
                </td>
                <td>
                  <div class = "otherBtn">
                    <button class = "tableBtn" onclick="수정함수(${수강생.학생코드})">수정</button>
                    <button class = "tableBtn" onclick="삭제함수(${수강생.학생코드})">삭제</button>
                  </div>
                </td>
              </tr>`;
    }
    // 3. html 출력, innerHTML
    전체출력.innerHTML = html;
    return; // 함수종료, 리턴 값이 없는 생략 가능
  }
  // [4] 삭제함수, [삭제]버튼 클릭시 onclick
function 삭제함수(삭제할코드) {
    console.log(`삭제함수가 호출되었습니다. 삭제할 코드: ${삭제할코드}`);
    // 1. 배열내 삭제할 요소(객체)를 찾기/조회/검색 등등
    for (let index = 0; index <= 수강생목록.length - 1; index++) {
        console.log(`${index} : ` + 수강생목록[index].학생코드);
      if (수강생목록[index].학생코드 == 삭제할코드) {
        console.log("실행");
        // 만약에 index번째의 수강생목록 객체내 학생코드와 삭제할코드와 같으면
        // 2. 배열내 요소(객체) 삭제, .splice( 삭제할인덱스 , 개수 ) , 인덱스 필요.
        // 추가
        alert(`${수강생목록[index].학생이름}이(가) 삭제되었습니다.`);
        수강생목록.splice(index, 1); //현재 찾은 index 요소를 삭제한다.
        break; // 삭제 성공했을때 [다른 객체를 조회할 필요없이] 가장 가까운 반복문 종료.
      }
    }
    수강생출력함수();
    return;
  }
  
  // [5] 수정함수, [수정]버튼 클릭시 onclick
  function 수정함수(수정할코드) {
    console.log(`수정함수가 호출되었습니다. 수정할 코드: ${수정할코드}`);
    // 1. 배열내 수정할 요소(객체)를 찾기/조회/검색 등등
    for (let index = 0; index <= 수강생목록.length - 1; index++) {
      if (수강생목록[index].학생코드 === 수정할코드) {
        // 만약에 index번째의 수강생목록 객체내 학생코드와 수정할코드가 같으면
        // 2. 배열내 요소(객체)수정, prompt()
        let 수강생수정 = prompt(
          '수강생명 / 성별 / 전화번호 를 입력하세요!'
        ).split('/');
        수강생목록[index].학생이름 = 수강생수정[0];
        수강생목록[index].성별 = 수강생수정[1];
        수강생목록[index].전화번호 = 수강생수정[2];
        // for(let i = 0; i < 수강목록.length; i++) {
        //   if(수강목록[i].강의코드 == 수강생수정[3] && 수강목록[i].학생코드 == 수강생목록[index].학생코드) {
        //     console.log("실행")
        //     수강목록.splice(i, 1);
        //   }
        // }
        break; // 수정했다면 다음 객체 조회는 할 필요 없이 반복문 종료
      }
    }
    수강생출력함수();
    return;
  }
  // #endregion 수강생관련함수