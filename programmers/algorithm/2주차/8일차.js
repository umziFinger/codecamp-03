
function solution(seoul) {
    var answer = '';
    
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            answer = "김서방은 "+i+"에 있다"
            break; // 찾으면 바로 종료
        }
    }
    return answer;
    
}   // 서울에서 김서방 찾기

function solution(s) {
    
    // checkString 함수의 뜻은
    // 알파벳이 있으면 false 없으면 true 반환하는 얘
    let checkString = (s) => {
        let arr = s.split("")
        for(let i=0; i<arr.length; i++) {
            // NaN으로만 조건문 돌리면 안됨
            // 이유는 NaN은 불특정 다수의 넘버 타입이라서
            // 비교자체가 안됨
            if(String(Number(arr[i]))==="NaN") {
                return false
            }
        }
        return true
    }
    let checkLength = (s) => {
        if(s.length===4 || s.length===6) {
            return true
        } else {
            return false
        }
    }
    
    return checkString(s) && checkLength(s)
}   // 문자열 다루기 기본



function solution(s) {
    if( s.length !== 4 && s.length !== 6){
        return false;
    }

    const answer = 
        s.split("").filter( str => isNaN(str) === true)
         .length === 0 ? true : false     
        
    console.log(answer)
}




function solution(n) {
    var answer = 0;
    
    for(let i=0; i<=n; i++){
        if(n%i === 0){
            answer = answer + i
        }
    }
    
    return answer;
}   //약수의 합

