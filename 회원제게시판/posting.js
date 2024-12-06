let idList = [
    {code : 1, id : "test1", pw : "1234"},
    {code : 2, id : "test2", pw : "4567"},
    {code : 3, id : "test3", pw : "7890"},
];
let postingList = [
    {code : 1, title : "제목이에요11", content : "내용이에요11", date : "2024-12-03", view : 3, idCode : 1},
    {code : 2, title : "제목이에요22", content : "내용이에요22", date : "2024-12-04", view : 2, idCode : 2},
    {code : 3, title : "제목이에요33", content : "내용이에요33", date : "2024-12-05", view : 1, idCode : 3},
];
// 로그인상태확인
let loginState = {code : "", id : "", pw : ""};
// 아이디코드
let IDcode = 4;
// 게시물코드
let PCode = 4;
// 첫 로드 출력
printPosting();

// 로그인함수
function signIn() {
    let login = document.querySelector("#signIn_box > fieldset > legend > h2");
    let id = document.querySelector("#input_id");
    let pw = document.querySelector("#input_pw");
    for(let index = 0; index < idList.length; index++) {
        if(id.value == idList[index].id && pw.value == idList[index].pw) {
            console.log(id.value + " : 로그인 성공");
            let content = document.querySelector("#content_box > fieldset > div > button");
            let signOutBtn = document.querySelector("#btn_signOut");
            let signInBtn = document.querySelector("#btn_signIn");
            let signUpBtn = document.querySelector("#btn_signUp");
            // content.style.display = "inline-block";
            content.disabled = false;
            signOutBtn.style.display = "inline-block";
            signInBtn.style.display = "none";
            signUpBtn.style.display = "none";
            login.innerHTML = `로그인 [${id.value}]`;
            console.log(login.innerHTML);
            loginState.code = idList[index].code;
            loginState.id = id.value;
            loginState.pw = pw.value;
            console.log(loginState);
            alert("로그인 성공");
            id.value = "";
            pw.value = "";
            // disabled : 비활성화
            id.disabled = true;
            pw.disabled = true;
            return;
        }
    }
    alert("로그인 실패");
    pw.value = "";
    console.log(id.value + " : 로그인 실패");
}
// 로그아웃함수
function signOut() {
    let login = document.querySelector("#signIn_box > fieldset > legend > h2");
    let id = document.querySelector("#input_id");
    let pw = document.querySelector("#input_pw");
    let content = document.querySelector("#content_box > fieldset > div > button");
    let signOutBtn = document.querySelector("#btn_signOut");
    let signInBtn = document.querySelector("#btn_signIn");
    let signUpBtn = document.querySelector("#btn_signUp");
    alert(`${loginState.id} : 로그아웃`);
    id.disabled = false;
    pw.disabled = false;
    // content.style.display = "none";
    content.disabled = true;
    signOutBtn.style.display = "none";
    signInBtn.style.display = "inline-block";
    signUpBtn.style.display = "inline-block";
    login.innerHTML = `로그인`;
    loginState.code = "";
    loginState.id = "";
    loginState.pw = "";
    console.log(loginState);
}

// 회원가입버튼클릭함수
function signUp() {
    let sign = document.querySelector("#signUp_box");
    sign.style.display = "block";
}

// 게시물출력함수
function printPosting() {
    let tbody = document.querySelector("#content_box > fieldset > table > tbody");
    // console.log(tbody);
    let html = ``;
    for(let index = 0; index < postingList.length; index++) {
        let temp = postingList[index];
        html += `<tr>
            <td class = "content_td">${index+1}</td>
            <td class = "content_td" style = "cursor : pointer;" onclick = "detailPosting(${temp.code})">${temp.title}</td>
            <td class = "content_td">${temp.date}</td>
            <td class = "content_td">${temp.view}</td>
        </tr>`;
    }
    tbody.innerHTML = html;
}

// 게시물상세보기함수
function detailPosting(postingCode) {
    for(let index = 0; index < postingList.length; index++) {
        let temp = postingList[index];
        if(temp.code == postingCode) {
            temp.view++;
            let posting = document.querySelector("#detail_posting > div");
            posting.innerHTML = `<div>
                <div>
                    <div style = "margin : 30px 0px; display : flex; justify-content : space-between;">
                        <span>제목 : <label>${temp.title}</label></span>
                        <span>작성일자 : <label>${temp.date}</label></span>
                    </div>
                    <fieldset>
                        <legend> 내용 </legend>
                        <p>${temp.content}</p>
                    </fieldset>
                    <div style = "margin : 15px 0px; text-align : end;">
                        <button class = "btn" onclick = "changePosting(${temp.code}, ${temp.idCode})">수정</button>
                        <button class = "btn" onclick = "deletePosting(${temp.code}, ${temp.idCode})">삭제</button>
                    </div>
                </div>
            </div>`;
        }
        // if()
    }
    printPosting();
}

// 게시물삭제함수
function deletePosting(postingCode, idCode) {
    if(idCode == loginState.code) {
        console.log("true실행");
        for(let index = 0; index < postingList.length; index++) {
            let temp = postingList[index];
            if(temp.code == postingCode) {
                let del = confirm("정말 삭제하시겠습니까?");
                if(del) {
                    alert(`${temp.title}이(가) 삭제되었습니다.`);
                    postingList.splice(index, 1);
                }
            }
        }
    } else if(loginState.code != "") {
        alert("본인이 작성한 게시물만 삭제할 수 있습니다.");
    } else {
        alert("로그인을 해주세요.");
    }
    printPosting();
}
// 게시물수정함수
function changePosting(postingCode, idCode) {
    if(idCode == loginState.code) {
        for(let index = 0; index < postingList.length; index++) {
            let temp = postingList[index];
            if(temp.code == postingCode) {
                let change = confirm("수정하시겠습니까?");
                if(change) {
                    let posting = document.querySelector("#detail_posting");
                    let now = new Date();
                    posting.innerHTML = `
                    <h2>게시물 수정</h2>
                    <div>
                        <div>
                            <div style = "margin : 30px 0px; display : flex; justify-content : space-between;">
                                <span>제목 : <input type = "text" value = "${temp.title}"/></span>
                                <span>작성일자 : <label>""</label></span>
                            </div>
                            <fieldset>
                                <legend> 내용 </legend>
                                <textarea id = "write_content" rows = "20" style = "width : 99%">${temp.content}</textarea>
                            </fieldset>
                            <div style = "margin : 15px 0px; text-align : end;">
                                <button class = "btn" onclick = "changePosting(${temp.code}, ${temp.idCode})">완료</button>
                                <button class = "btn" onclick = "deletePosting(${temp.code}, ${temp.idCode})">취소</button>
                            </div>
                        </div>
                    </div>`;
                }
            }
        }
    } else if (loginState.code != "") {
        alert("본인이 작성한 게시물만 삭제할 수 있습니다.");
    } else {
        alert("로그인을 해주세요.");
    }
}

// 게시물추가함수
function addPosting() {
    console.log("실행");
    let write_posting = document.querySelector("#write_posting");
    let content = document.querySelector("#write_content");
    content.value = "";
    write_posting.style.display = "block";
}

// 게시물작성중 저장함수
function savePosting() {
    // console.log("저장중...");
    let save = confirm("저장하시겠습니까?");
    if(save) {        
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let day = now.getDate() < 10 ? "0"+now.getDate() : now.getDate();
        date = `${year}-${month}-${day}`;
        // console.log(date);
        let title = document.querySelector("#write_title").value;
        let content = document.querySelector("#write_content").value;
        console.log("loginState");
        console.log(loginState);
        let temp = {code : PCode, title : title, content : content, date : date, view : 0, idCode : loginState.code};
        console.log(temp);
        postingList.push(temp);
        console.log(postingList);
        PCode++;
        title.value = "";
        content.value = "";
        document.querySelector("#write_posting").style.display = "none";
        printPosting();
    }
}

// 게시물작성중 취소함수
function cancelPosting() {
    let cancel = confirm("취소하면 적성중인 내용은 없어집니다.\n정말 취소하시겠습니까?");
    if(cancel) {
        document.querySelector("#write_title").value = "";
        document.querySelector("#write_content").value = "";
        document.querySelector("#write_posting").style.display = "none";
    }
}