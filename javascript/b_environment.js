// 자바스크립트 개발 환경 설정

// 1-1. 텍스트 에디터(VSCode) & 구글 크롬

// 1-2. 자바스크립트 실행(스크립트 적용)

// <script>태그로 감싼 Javascript 코드는 브라우저가 로드될 때 자동 실행
// 웹 문서 어디든 위치 가능, 위치 그 자리에서 바로 실행
// 하나의 웹 문서에 여러 개 사용 가능
// </ body>태그 직전에 삽입하는 것이 좋다.

let heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = "red";
}

// 오류 확인 방법(Reference Error, SyntaxError)

// ReferenceError(예외 처리)
// Uncaught ReferenceError: ** is not defined
// 변수가 선언되지 않은 상태에서 사용될 때 발생

// SyntaxError(구문 오류)
// 문법적으로 유효하지 않은 코드를 작성

// 자바스크립트 표준 스타일

// 1. 코드 들여쓰기 tab, space 사용

// 2. 세미콜론으로 문장 구분

// let n = 10; let m = 20; // 권장하지 않음

let n = 10; 
let m = 20;

// 3. 공백을 사용 (가독성)

// let num=1; 
let num = 1;

// 4. 주석 작성

// 한 줄 주석 : // (슬래시 2개)
/*
    여러 줄 주석
    여러 줄 주석 안에는 또 다른 주석 사용 불가
*/

// 식별자 규칙

// 1. 첫 글자는 반드시 영문자 언더스코어(_), 달러 기호($)로 시작
//  이후에는 숫자로 작성 가능 (숫자로 시작 불가)
// 2. 두 단어 이상이 모여 하나의 식별자를 만들 경우 공백 문자 포함 불가
// (단어와 단어 사이를 -하이픈 또는 _언더바로 연결해서 사용 
// 또는 두 단어의 경우 첫번째 단어는 소문자 두 번째 단어는 대문자로 시작)
// 3. 특수문자는 _언더바와 $달러 기호만 사용 가능
// 4. 예약어(키워드) 사용 불가 : 자바스크립트에서 미리 정해 놓은 단어 (var, for, true, function 등)

// 의미 있는 단어를 사용

// 클래스 : 항상 대문자로 시작
// 변수, 인스턴스(객체), 함수, 메서드 : 항상 소문자로 시작

// let 또는 const를 사용하여 변수를 선언 (var 사용 금지)
// 문자열을 만들 때 작은 따옴표를 사용('')
// 항상 엄격한 비교를 사용합니다.(타입 비교)
// 화살표 함수를 사용하여 함수를 만듭니다.